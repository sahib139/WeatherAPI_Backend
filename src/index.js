const express = require("express");
require("dotenv").config()
const bodyParser = require("body-parser");
require("./config/redis");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT,()=>{
	console.log("Server started at port "+PORT);
});
