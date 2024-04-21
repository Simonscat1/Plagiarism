const UserModel = require("../models/user-model");
const RoleModel = require("../models/role-model");
const UserDto = require("../dtos/user-dto");

class UserController {
	async changeRole(req, res, next) {
		try {
			const { value } = req.body;
			const { username } = req.params;

			const findUser = await UserModel.findOne({ username });
			if (!findUser) {
				throw new Error("Пользователь не найден");
			}

			const findRole = await RoleModel.findOne({ value });
			if (!findRole) {
				throw new Error("Указанная роль не существует");
			}

			findUser.role = value;
			findUser.save();
			return res
				.status(200)
				.json({ message: `Роль пользователя ${username} изменена на ${value}` });
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: e.message });
		}
	}

	async getAll(req, res, next) {
		try {
			const users = await UserModel.find();
			return res.status(200).json(users);
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: "Ошибка получения пользователей" });
		}
	}

	async getOne(req, res, next) {
		try {
			const { username } = req.params;
			const user = await UserModel.findOne({ username });
			const userDto = new UserDto(user);
			return res.status(200).json(userDto);
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: "Ошибка получения данных о пользователе" });
		}
	}

	async deleteUser(req, res, next) {
		try {
			const { username } = req.params;
			const deletedUser = await UserModel.findOneAndDelete({ username });
			return res.status(200).json({ message: `Пользователь ${deletedUser.username} удален` });
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: "Ошибка удаления пользователя" });
		}
	}
}

module.exports = new UserController();
