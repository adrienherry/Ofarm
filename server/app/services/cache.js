const redisClient = require("./redisClient");
const { promisify } = require("util");

const asyncClient = {
	get: promisify(redisClient.get).bind(redisClient),
	set: promisify(redisClient.set).bind(redisClient),
	setex: promisify(redisClient.setex).bind(redisClient),
	del: promisify(redisClient.del).bind(redisClient),
	exists: promisify(redisClient.exists).bind(redisClient),
};

const PREFIX = "jwt-blacklist";
const TIMEOUT = 60 * 60; // 1 hour
const keys = [];
