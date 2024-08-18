const redis = require('redis');

const client = redis.createClient({
    socket:{
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        passowrd: process.env.REDIS_PASS
    }
});


async function  ConnectRedis(){
    client.on('error',(err)=>{
        console.log("Error while connecting to redis: error ->"+err);
    });
    await client.connect();
    console.log("Connected to redis");
    return client;
}

const shutdown = async (signal) => {
    console.log(`Received ${signal}. Closing Redis connection...`);
    try {
      await client.quit();
      console.log('Redis connection closed.');
      process.exit(0);
    } catch (error) {
      console.error('Error while closing Redis connection:', error);
      process.exit(1);
    }
};

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

process.on('uncaughtException',async (error)=>{
    console.error('Uncaught exception:', error);
    await shutdown('uncaughtException');
});

process.on('unhandledRejection', async (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    await shutdown('unhandledRejection');
});

ConnectRedis();

module.exports = {
    redisClient:client,
}