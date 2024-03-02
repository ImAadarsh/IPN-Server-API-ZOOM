const { createClient } = require('redis');

// Socket required for node redis <-> docker-compose connection
const Redis = createClient({
    password: '0cPmFp5msBd7fSaKqrt80GQ8hA6KFBfn',
    socket: {
        host: 'redis-13680.c325.us-east-1-4.ec2.cloud.redislabs.com',
        port: 13680
    }
});

module.exports = Redis;
