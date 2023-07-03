const express = require("express");

const {upload} = require("../middlewares/upload_images")
const uploadProductImage = require("../controllers/productImages")
const imgRouter = express.Router();
 imgRouter.use(express.static('public'));
 imgRouter.use(express.static('images'));




imgRouter.post("/upload-product-img", upload.single("product-img"), uploadProductImage);
  
  module.exports = imgRouter;
  