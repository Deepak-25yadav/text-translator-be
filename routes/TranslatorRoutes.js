const express = require("express"); // Import the express library
const TranslatedText = require("../controller/TranslatorController"); // Import the TranslatedText controller

const translatorRouter = express.Router(); // Create a new router instance

// Define a GET route for the root path of the translator router
translatorRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "Congratulations your translator is working fine.", // Respond with a success message
  });
});

// Define a POST route for translating input text
translatorRouter.post("/translate-input-text", TranslatedText); // Use the TranslatedText controller to handle the POST request

// Export the translator router so it can be used in other parts of the application
module.exports = translatorRouter;
