const jsonwebtoken = require("jsonwebtoken");
// const jwt = require("express-jwt");

const jwtSecret = process.env.JWT_SECRET;
const jwtOptions = { algorithm: "HS256", expiresIn: "1h" };

const extractBearerToken = (headerValue) => {
	if (typeof headerValue !== "string") {
		return false;
	}

	const matches = headerValue.match(/(bearer)\s+(\S+)/i);

	console.log(matches);

	return matches && matches[2];
};

const jwtService = {
	generateTokenWith: function (id, username) {
		return jsonwebtoken.sign({ username: username, id }, jwtSecret, jwtOptions);
	},

	verifyAndDecodeTokenMiddleware: function (req, res, next) {
		const token =
			req.headers.authorization &&
			extractBearerToken(req.headers.authorization);

		if (!token) {
			return res.status(401).json({ error: "Error. User must be logged in." });
		}

		jsonwebtoken.verify(token, jwtSecret, (error, decodedToken) => {
			if (error) {
				res.status(401).json({ error: "Error. Access token has expired." });
			} else {

				const decoded = jsonwebtoken.decode(token);
				decoded.id ? (res.locals.id = decoded.id) : "";

				return next();
			}
		});
	},
};

module.exports = jwtService;
