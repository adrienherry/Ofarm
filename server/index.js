require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static("./public"));

const morgan = require("morgan");
app.use(morgan("dev"));

const expressSwagger = require("express-swagger-generator")(app);

let options = {
	swaggerDefinition: {
		info: {
			description: "An open-source farming API",
			title: "oFarm",
			version: "1.0.0",
		},
		host:
			process.env.NODE_ENV === "production"
				? process.env.HEROKU_URL
				: `localhost:${port}`,
		basePath: "/api/v1",
		produces: ["application/json"],
		schemes: ["http", "https"],
	},
	basedir: __dirname, //app absolute path
	files: ["./app/**/*.js"], //Path to the API handle folder
	route: { url: "/api/v1/docs", docs: "/api-docs.json" },
};
expressSwagger(options);

const router = require("./app/router");

app.use("/api/v1", router);

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}...`);
});

module.exports = app;
