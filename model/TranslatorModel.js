
const mongoose = require("mongoose");

const translationSchema = new mongoose.Schema({
  inputText: String,
  translatedText: String,
  fromLang: String,
  totLang: String, 
});

const Translation = mongoose.model("Translation", translationSchema);

module.exports = Translation;