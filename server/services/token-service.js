const jwt = require("jsonwebtoken");
const tokenModel = require("../models/token-model");

const JWT_ACCESS_SECRET = "jwt-access-12";
const JWT_REFRESH_SECRET = "jwt-refresh-12";

class TokenService {
	generateTokens(payload) {
		const access = jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: "60m" });
		const refresh = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: "30d" });
		return {
			access,
			refresh,
		};
	}

	validateAccessToken(token) {
		try {
			const userData = jwt.verify(token, JWT_ACCESS_SECRET);
			return userData;
		} catch (e) {
			return null;
		}
	}

	validateRefreshToken(token) {
		try {
			const userData = jwt.verify(token, JWT_REFRESH_SECRET);
			return userData;
		} catch (e) {
			return null;
		}
	}

	async saveToken(userId, refreshToken) {
		const tokenData = await tokenModel.findOne({ user: userId });
		if (tokenData) {
			tokenData.refresh = refreshToken;
			return tokenData.save();
		}

		const token = await tokenModel.create({ user: userId, refresh: refreshToken });
		return token;
	}

	async removeToken(refresh) {
		const tokenData = await tokenModel.deleteOne({ refresh });
		return tokenData;
	}

	async findToken(refresh) {
		const tokenData = await tokenModel.findOne({ refresh });
		return tokenData;
	}
}

module.exports = new TokenService();
