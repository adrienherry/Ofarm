const redisClient = require("./redisClient");
const { promisify } = require("util");

const asyncClient = {
	get: promisify(redisClient.get).bind(redisClient),
	set: promisify(redisClient.set).bind(redisClient),
	setex: promisify(redisClient.setex).bind(redisClient),
	del: promisify(redisClient.del).bind(redisClient),
	exists: promisify(redisClient.exists).bind(redisClient),
};

const TIMEOUT = 60 * parseInt(process.env.JWT_TOKEN_DURATION_MIN); // 1 hour = 60 * 60 sec

const DB_PREFIX = "ofarm-blacklist";

const keys = [];

const addToBlacklist = async (id, token) => {
	const key = `${DB_PREFIX}:${token}`;

	if (!keys.includes(key)) {
		await asyncClient.setex(key, TIMEOUT, JSON.stringify(token));
    }

    keys.push(key);

    return;
};

const isBlacklisted = (id, token) => {
	// Vérifier si le token est dans la liste ou pas
    const key = `${DB_PREFIX}:${token}`;
    if (keys.find(item => key === item)) {
		return true;
	} else {
        return false;
    }
};

const cleanBlacklist = async (_, __, next) => {
	for (const key of keys) {
		await asyncClient.del(key);
	}

	keys.length = 0;
	next();
};

module.exports = {addToBlacklist, isBlacklisted, cleanBlacklist};
