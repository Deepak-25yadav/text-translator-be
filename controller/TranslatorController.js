const Translation = require('../model/TranslatorModel'); // Import the Translation model
const translate = require('translate-google-api'); // Import the Google Translate API

// Define an asynchronous function to handle the translation request
const TranslatedText = async (req, res) => {
  // Destructure inputText, fromLang, and toLang from the request body
  const { inputText, fromLang, toLang } = req.body;
  console.log("reqBody", req.body); // Log the request body for debugging purposes
  
  try {
    // Perform the translation using the Google Translate API
    const result = await translate(inputText, { from: fromLang, to: toLang });
    
    // Create a new Translation document with the input and translated text
    const startTranslation = new Translation({
      inputText,
      translatedText: result[0],
      fromLang,
      toLang,
    });
    
    // Save the translation document to the database
    await startTranslation.save();
    
    // Respond with the translated text
    res.status(200).json({ translatedText: result[0] });
  } catch (error) {
    // Log the detailed error if the translation fails
    console.error('Translation error:', error);
    // Respond with an error message if the translation fails
    res.status(500).json({ error: 'Translation failed' });
  }
};

// Export the TranslatedText function so it can be used in other parts of the application
module.exports = TranslatedText;
