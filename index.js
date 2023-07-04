const express = require("express");
const cors = require("cors");
require("dotenv/config");
require("./db");
const bodyParser = require('body-parser')
///////////////
//REQUIRE ROUTERS
const userRouter = require("./routes/users");
const imgRouter = require("./routes/productImages");
const productRouter = require("./routes/products");
//
const app = express();
const PORT = process.env.PORT || 3000;
/////////////
//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
//////////////
//USING ROUTES
app.use("/users", userRouter);
app.use("/products/images", imgRouter);
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`Image Uploader App is Listening on http://localhost:${PORT}`);
});
