const { Schema, model } = require("mongoose");

const ListingSchema = new Schema({
	language: { type: String, ref: "Language", required: true },
	code: { type: String, required: true },
});

module.exports = model("Listing", ListingSchema);
