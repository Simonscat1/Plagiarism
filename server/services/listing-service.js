const ListingModel = require("../models/listing-model");
const stringSimilarity = require("string-similarity");
const plagiarism = require("plagiarism");

const USER_API_KEY = "3fa1d1071e95b0a3a631f184049c5332";

class ListingService {
	async check(language, code) {
		const listingsData = await ListingModel.find({
			language,
		});
		const similarities = listingsData?.map(listing => ({
			listing,
			similarity: stringSimilarity.compareTwoStrings(code, listing.code),
		}));
		similarities.sort((a, b) => b.similarity - a.similarity);

		return +(similarities[0]?.similarity * 100).toFixed(2);
	}

	async checkWeb(code) {
		const checkResult = await plagiarism(code, {
			"text.ru": {
				userkey: USER_API_KEY,
			},
		});

		return checkResult;
	}
}

module.exports = new ListingService();
