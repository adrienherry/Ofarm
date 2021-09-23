require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static("./public"));

const morgan = require("morgan");
app.use(morgan("dev"));

const router = require("./app/router");
app.use("/api/v1", router);

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}...`);
});
