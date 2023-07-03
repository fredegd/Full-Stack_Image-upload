const Product = require("../models/product");

const createProduct = async (req, res) => {
  try {
    const {
      body: { name, price,image,owner},
    } = req;
    const product = await Product.create({ name, price,image,owner });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


const getProduct = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const product = await Product.findById(id).populate(
        "owner","name email"
    );
    res.json(product);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getProducts = async (req, res) => {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  
const updateProduct = async (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req;

    const product = await Product.findByIdAndUpdate(id, body, { new: true });
    res.json(product);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const product = await Product.findByIdAndDelete(id);
    res.json(product);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
