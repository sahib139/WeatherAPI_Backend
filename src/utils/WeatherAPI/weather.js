const axios = require('axios');
const API_KEY = process.env.WEATHER_API_KEY;


async function getWeatherDataByLocation({location}) {
    try {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;
        console.log(url);
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

async function getWeatherDataByCoordinates({latitude, longitude}) {
    try {
        const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

module.exports ={
    getWeatherDataByLocation,
    getWeatherDataByCoordinates,
}