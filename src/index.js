const express = require("express");
const morgan = require("morgan");
const debug = require("debug")("server");

// initializations
const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded());

// global variables

// routes

// static files

// start the server
app.listen(app.get("port"), () => {
	debug(`server listening on http://localhost:${app.get("port")}`);
});
