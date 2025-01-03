const {redisClient} = require("../../config/redis");

function flattenObject(ob) {
    let result = {};

    for (const i in ob) {
        if (typeof ob[i] === 'object' && ob[i] !== null && !Array.isArray(ob[i])) {
            const temp = flattenObject(ob[i]);
            for (const j in temp) {
                result[`${i}.${j}`] = temp[j];
            }
        } else if (ob[i] === null || ob[i] === undefined) {
            result[i] = ''; 
        } else if (typeof ob[i] === 'object' && Array.isArray(ob[i])) {
            result[i] = JSON.stringify(ob[i]);
        } else {
            result[i] = ob[i];
        }
    }
    return result;
}


async function addToCache({parameter,key,value}){
   try {
    const flatValue = flattenObject(value);
    const flatValueAsArray = Object.entries(flatValue).flat();
    return await redisClient.HSET(`${parameter}-${key}`,flatValueAsArray);
   } catch (error) {
    console.log(error);
    return undefined;
   }
}

async function  getValueFromCache({parameter,key}){
    try {
        return await redisClient.HGETALL(`${parameter}-${key}`);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

module.exports ={
    addToCache,
    getValueFromCache
}