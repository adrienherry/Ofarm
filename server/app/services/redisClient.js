const redis = require("redis");

const client = redis.createClient(process.env.NODE_ENV==="production"?process.env.REDIS_URL:"");
client.on("error", (err) => console.log(err));

module.exports = client;
