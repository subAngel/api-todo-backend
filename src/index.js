const express = require("express");
const morgan = require("morgan");
const debug = require("debug")("api:server");

// initializations
const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));

// global variables

// routes
app.use(require("./routes/todos.routes"));

// static files

// start the server
app.listen(app.get("port"), () => {
	debug(`server is listening on http://localhost:${app.get("port")}`);
});
