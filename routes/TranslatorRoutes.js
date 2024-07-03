const express = require("express");
const TranslatedText = require("../controller/TranslatorController");

const translatorRouter = express.Router();

translatorRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "Congratulations your translator working fine.",
  });
});
translatorRouter.post("/translate-input-text", TranslatedText);

module.exports = translatorRouter;