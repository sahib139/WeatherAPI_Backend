const routes = require("express").Router();
const {weather} = require("../controller/weather");

routes.get("/weather",weather);

module.exports = routes;