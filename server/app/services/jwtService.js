const jsonwebtoken = require("jsonwebtoken");
const jwt = require("express-jwt");

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET;
const jwtOptions = { algorithm: "HS256", expiresIn: "2h" };

const revokeToken = function (req, payload, done) {};

const jwtService = {
	generateTokenWith: function (username, id) {
		return jsonwebtoken.sign({ username: username, id }, jwtSecret, jwtOptions);
	},

	grantAccess: jwt({
		secret: jwtSecret,
		// audience: 'http://myapi/protected',
		// issuer: 'http://issuer',
		algorithms: ["HS256"],
		isRevoked: revokeToken,
	}),
};

// const generateAndSendToken = jwt({ secret: secretCallback, algorithms: ["HS256"] }),
//         function (req, res) {
//             if (!req.user.admin) return res.sendStatus(401);
//             res.sendStatus(200);
//         }

module.exports = jwtService;
