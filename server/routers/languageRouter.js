const Router = require("express").Router;
const languageController = require("../controllers/language-controller");

const languageRouter = new Router();
languageRouter.post("/", languageController.addLanguage);
languageRouter.get("/", languageController.getAllLanguages);

module.exports = languageRouter;
