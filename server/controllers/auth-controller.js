const userService = require("../services/user-service");
const { validationResult } = require("express-validator");

class AuthController {
	async register(req, res, next) {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				throw new Error(`Ошибка при валидации`);
			}

			const { email, username, password } = req.body;
			const userData = await userService.register(username, email, password);
			res.cookie("refresh", userData.refresh, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			});
			return res.status(200).json(userData);
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: e.message });
		}
	}

	async login(req, res, next) {
		try {
			const { username, password } = req.body;
			const userData = await userService.login(username, password);
			res.cookie("refresh", userData.refresh, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			});
			return res.status(200).json(userData);
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: e.message });
		}
	}

	async logout(req, res, next) {
		try {
			const { refresh } = req.cookies;
			const token = await userService.logout(refresh);
			res.clearCookie("refresh");
			return res.status(200);
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: e.message });
		}
	}
}

module.exports = new AuthController();
