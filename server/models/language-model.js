const { Schema, model } = require("mongoose");

const LanguageSchema = new Schema({
	value: { type: String, unique: true, required: true },
});

module.exports = model("Language", LanguageSchema);
