const express = require("express");
const upload = require("../middlewares/multer-upload");
const { cloudinaryUpload } = require("../middlewares/cloudinary-Uploads");
///import the Control Functions
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

////////////////////
///Create the Routes:
const productRouter = express.Router();

///CRUD Operations
productRouter.post(
  "/",
  upload.single("product-img"),
  cloudinaryUpload,
  createProduct
);

productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);

productRouter.put("/:id", updateProduct);

productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;
