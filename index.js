const express = require("express");
require("dotenv/config");
require("./db");
const bodyParser = require('body-parser')
const cors = require("cors");
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
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
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
