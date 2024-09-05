const redis = require('redis');
const { redis: redisConfig } = require('../config');

const client = redis.createClient({
    host: redisConfig.host,
    port: redisConfig.port,
});

client.on('error', (err) => {
    console.error('Redis error:', err);
});

const setCache = (key, value, ttl = 3600) => {
    client.setex(key, ttl, JSON.stringify(value));
};

const getCache = (key, callback) => {
    client.get(key, (err, data) => {
        if (err) return callback(err);
        callback(null, JSON.parse(data));
    });
};

module.exports = { setCache, getCache };
