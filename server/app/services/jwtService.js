const jsonwebtoken = require("jsonwebtoken");
const { cleanBlacklist, isBlacklisted } = require("./jwtBlacklist");
const standardErrors = require("../helpers/standardErrors");

const jwtSecret = process.env.JWT_SECRET;
const jwtOptions = {
	algorithm: "HS256",
	expiresIn: `${process.env.JWT_TOKEN_DURATION_MIN}m`,
};

const extractBearerToken = (headerValue) => {
	if (typeof headerValue !== "string") {
		return false;
	}

	const matches = headerValue.match(/(bearer)\s+(\S+)/i);

	return matches && matches[2];
};

const readToken = (req) => {
	return (
		(req.headers.authorization &&
			extractBearerToken(req.headers.authorization)) ||
		null
	);
};

const jwtService = {
	generateTokenWith: function (id, username) {
		return jsonwebtoken.sign({ username: username, id }, jwtSecret, jwtOptions);
	},

	verifyAndDecodeTokenMiddleware: function (req, res, next) {
		const token = readToken(req);

		if (!token) {
			return res.status(401).json(standardErrors.UserNotLoggedError);
		}

		jsonwebtoken.verify(token, jwtSecret, (error, decodedToken) => {
			if (error) {
				res.status(401).json(standardErrors.UserTokenExpired);
			} else {
				if (isBlacklisted(decodedToken.id, token)) {
					return res.status(403).json(standardErrors.UserNotLoggedError);
				}
				decodedToken.id ? (res.locals.id = decodedToken.id) : "";
				res.locals.token = token;
				return next();
			}
		});
	},

	redirectIfAlreadyLoggedMiddleware: function (req, res, next) {
		const token = readToken(req);

		if (!token) {
			return next();
		}

		jsonwebtoken.verify(token, jwtSecret, (error, decodedToken) => {
			if (!error) {
				if (isBlacklisted(decodedToken.id, token)) {
					return next();
				}
				return res.json({ redirect: true });
			} else {
				return next();
			}
		});
	},
};

module.exports = jwtService;
