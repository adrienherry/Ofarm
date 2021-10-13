const redisClient = require("./redisClient");
const { promisify } = require("util");
const { standardErrors } = require("../helpers");

const asyncClient = {
	get: promisify(redisClient.get).bind(redisClient),
	set: promisify(redisClient.set).bind(redisClient),
	setex: promisify(redisClient.setex).bind(redisClient),
	del: promisify(redisClient.del).bind(redisClient),
	exists: promisify(redisClient.exists).bind(redisClient),
};

const TIMEOUT = 60 * 60; // 1 hou-r = 60 * 60 sec

const DB_PREFIX = "ofarm";

const keys = [];

const cache = async (req, res, next) => {
	try {
		const key =
			`${DB_PREFIX}:${
				req.url
			}` +
			(req.url === "/search" && req.query.text
				? `?text=${req.query.text.toLowerCase()}`
				: "");

		if (keys.includes(key)) {
			const jsonData = await asyncClient.get(key);
			const value = JSON.parse(jsonData);

			res.json(value);
		} else {
			const originalJson = res.json.bind(res);

			// res.json = async (data) => {
			// 	await asyncClient
			// 		.setex(key, TIMEOUT, JSON.stringify(data))
			// 	keys.push(key);
			// 	console.log(keys)
			// 	originalJson(data);
			// };

			next();
		}
	} catch (error) {
		console.log(error);
		res.status(500).json(standardErrors.InternalServerError);
	}
};

const flush = async (_, __, next) => {
	console.log(keys);

	for (const key of keys) {
		await asyncClient.del(key);
	}

	keys.length = 0;
	next();
};

module.exports = { cache, flush };
