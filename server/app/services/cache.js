const redisClient = require("./redisClient");
const { promisify } = require("util");

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
	// Additional option for query string in /search route
	const key =
		`${DB_PREFIX}:${req.url}` +
		(req.url === "/search" && req.query.text
			? `?text=${req.query.text.toLowerCase()}`
			: "");
	
	if (keys.includes(key)) {
		const jsonData = await asyncClient.get(key);
		const value = JSON.parse(jsonData);
		res.json(value);
	} else {
		const originalJson = res.json.bind(res);

		res.json = async (data) => {
			const jsonData = JSON.stringify(data);
			await asyncClient.setex(key, TIMEOUT, jsonData);
			keys.push(key);

			const check = await asyncClient.get(key);
			originalJson(data);
		};

		next();
	}
};

const flush = async (_, __, next) => {
	console.log(keys);

	for (const key of keys) {
		await asyncClient.del(key);
	}

	keys.length = 0;
	console.log(keys);
	next();
};

module.exports = { cache, flush };
