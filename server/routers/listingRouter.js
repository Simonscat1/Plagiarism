const Router = require("express").Router;
const multer = require("multer");
const listingController = require("../controllers/listing-controller");

const upload = multer({ dest: "uploads/" });

const listingRouter = new Router();
listingRouter.post("/add", listingController.addListing);
listingRouter.post("/check", listingController.checkListing);
listingRouter.post("/check/web", listingController.checkListingWeb);
listingRouter.post("/check/upload", upload.single("file"), listingController.upload);

module.exports = listingRouter;
