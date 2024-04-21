const ListingModel = require("../models/listing-model");
const listingService = require("../services/listing-service");

class ListingController {
	async addListing(req, res, next) {
		try {
			const { language, code } = req.body;
			const listingData = await ListingModel.create({
				language,
				code,
			});
			return res.status(200).json(listingData);
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: "Ошибка при добавлении кода в базу" });
		}
	}

	async checkListing(req, res, next) {
		try {
			const { language, code } = req.body;
			const similarity = await listingService.check(language, code);

			return res.status(200).json({ similarity });
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: "Ошибка при проверке кода" });
		}
	}

	async checkListingWeb(req, res, next) {
		try {
			const { code } = req.body;
			const checkResult = await listingService.checkWeb(code);
			return res.status(200).json(checkResult);
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: "Ошибка при проверке кода" });
		}
	}

	async upload(req, res, next) {
		try {
			const code = req.file.buffer.toString();
			const { language } = req.body;
			const similarity = await listingService.check(language, code);

			return res.status(200).json({ similarity });
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: "Ошибка при проверке кода" });
		}
	}
}

module.exports = new ListingController();
