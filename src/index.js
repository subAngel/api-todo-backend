const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cors = require("cors");
const debug = require("debug")("api:server");

require("dotenv").config();

// initializations
const app = express();
require("./database");

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(cors());

// global variables

// routes
app.use(require("./routes/todos.routes"));

// static files

// start the server
app.listen(app.get("port"), () => {
	debug(`server is listening on http://localhost:${app.get("port")}`);
});
