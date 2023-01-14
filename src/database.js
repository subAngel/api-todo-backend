const mongoose = require("mongoose");
const debug = require("debug")("api:database");
require("dotenv").config();

mongoose.set("strictQuery", true);
mongoose
	.connect(process.env.MONGOURL, { useNewUrlParser: true })
	.then((db) => debug("DB is connected successfully"))
	.catch((err) => console.log(err));
