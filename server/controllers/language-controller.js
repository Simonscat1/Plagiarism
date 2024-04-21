const LanguageModel = require("../models/language-model");

class LanguageController {
	async addLanguage(req, res, next) {
		try {
			const { value } = req.body;
			const findLanguage = await LanguageModel.findOne({ value });

			if (findLanguage) {
				throw new Error("Данный язык программирования уже есть в базе");
			}

			const language = await LanguageModel.create({ value });
			return res.status(200).json(language);
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: e.message });
		}
	}

	async getAllLanguages(req, res, next) {
		try {
			const languages = await LanguageModel.find();
			return res.status(200).json(languages);
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: "Ошибка получения языков программирования" });
		}
	}
}

module.exports = new LanguageController();
