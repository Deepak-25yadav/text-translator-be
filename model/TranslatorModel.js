
const mongoose = require("mongoose"); // Import the mongoose library

// Define a schema for the Translation model
const translationSchema = new mongoose.Schema({
  inputText: String,       // Field to store the original text to be translated
  translatedText: String,  // Field to store the translated text
  fromLang: String,        // Field to store the source language code
  toLang: String,          // Field to store the target language code
});

// Create the Translation model using the defined schema
const Translation = mongoose.model("Translation", translationSchema);

// Export the Translation model so it can be used in other parts of the application
module.exports = Translation;

