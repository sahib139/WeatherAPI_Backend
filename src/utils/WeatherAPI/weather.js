const axios = require('axios');
const API_KEY = process.env.WEATHER_API_KEY;


async function getWeatherDataByLocation({location}) {
    try {
        const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`);
        return response.data;
    } catch (error) {
        return ;
    }
}

async function getWeatherDataByCoordinates({latitude, longitude}) {
    try {
        const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=${API_KEY}`);
        return response.data;
    } catch (error) {
        return ;
    }
}

module.exports ={
    getWeatherDataByLocation,
    getWeatherDataByCoordinates,
}