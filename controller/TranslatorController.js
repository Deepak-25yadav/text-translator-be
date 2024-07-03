const Translation = require('../model/TranslatorModel');
const translate = require('translate-google-api');

const TranslatedText = async (req, res) => {
  const { inputText, fromLang, toLang } = req.body;
  console.log("reqBody",req.body)
  try {
    const result = await translate(inputText, { from: fromLang, to: toLang });
    const startTranslation = new Translation({
      inputText,
      translatedText: result[0],
      fromLang,
      toLang,
    });
    await startTranslation.save();
    
    res.status(200).json({ translatedText: result[0] });
  } catch (error) {
    console.error('Translation error:', error); // Log the detailed error
    res.status(500).json({ error: 'Translation failed' });
  }
};

module.exports = TranslatedText;