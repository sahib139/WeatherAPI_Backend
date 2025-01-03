# WeatherAPI_Backend
### A lightweight backend service to fetch and cache weather data using location names or geographical coordinates.

## Features
- Fetch weather data by location or coordinates.
- Optimized response times using Redis caching.
- Graceful error handling and standardized API responses.

## Technologies
- Node.js: Backend runtime environment.
- Express: Web framework for handling routes.
- Redis: Caching layer for fast lookups.
- WeatherAPI: Third-party weather data provider.

## Installation

- Clone the repository:
- git clone `https://github.com/yourusername/WeatherAPI_Backend.git`
- cd WeatherAPI_Backend
### Install dependencies:
- npm install
- Configure environment variables in a .env file:
```
WEATHER_API_KEY=
REDIS_HOST=
REDIS_PORT=12282
REDIS_PASS=
```
- Start the server: `npm start` . The server will run at http://localhost:3000.