const {getWeatherDataByLocation,getWeatherDataByCoordinates} = require("../utils/WeatherAPI/weather");
const {getValueFromCache,addToCache} = require("../utils/redis/cachingResult");
const {responseHandler} = require("../utils/handlers/response");

const weather = async (req, res) => {
    try {
        const {location, coordinates } = req.query;

        if (location) {
            const valueFromCache = await getValueFromCache({parameter:'location',key:location});

            if(Object.keys(valueFromCache).length!==0){
                return responseHandler.successResponse({res, data:valueFromCache});
            } 
            const weatherDataByLocation = await getWeatherDataByLocation({location});
            if (weatherDataByLocation) {
                await addToCache({parameter:'location',key:location,value:weatherDataByLocation});
                return responseHandler.successResponse({res, data:weatherDataByLocation});
            }
            return responseHandler.serverErrorResponse({res,message:"Unable to Fetch Data"});
        } else if (coordinates) {
            const { latitude, longitude } = coordinates;
            const key = `${location}-${longitude}`;
            
            const valueFromCache = await getValueFromCache({parameter:'coordinates',key});
            if(Object.keys(valueFromCache).length!==0){
                return responseHandler.successResponse({res, data:valueFromCache});
            }
            const weatherDataByCoordinates = await getWeatherDataByCoordinates({ latitude, longitude });
            if (weatherDataByCoordinates) {
                await addToCache({parameter:'coordinates',key,value:weatherDataByCoordinates});
                return responseHandler.successResponse({res,data: weatherDataByCoordinates});
            }
            return responseHandler.serverErrorResponse({res,message:"Unable to Fetch Data"});
        } else {
            return responseHandler.badRequestResponse({res, message:"Please provide either location or coordinates"});
        }
    } catch (error) {
        return responseHandler.serverErrorResponse({res,message:'Server error',data:null,err:error})
    }
}

module.exports = {
    weather,
};