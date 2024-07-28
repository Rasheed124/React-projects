const Product = require("../models/product");

exports.addProduct = async (req, res) => {
  try {
    let products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new Product({
      id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
      features: req.body.features,
      brand: req.body.brand,
    });

    await product.save();
    res.status(201).json({ success: true, product: req.body.name });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.removeProduct = async (req, res) => {
  try {
    const removedProduct = await Product.findOneAndDelete({ id: req.body.id });

    if (removedProduct) {
      res.json({ success: true, name: req.body.name, message: "Product removed successfully" });
    } else {
      res.status(404).json({ success: false, name: req.body.name, message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    let products = await Product.find({}).sort({ date: -1 });
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getRecentlyPublished = async (req, res) => {
  try {
    const days = parseInt(req.query.days) || 7;
    const dateThreshold = new Date();
    dateThreshold.setDate(dateThreshold.getDate() - days);

    let products = await Product.find({ date: { $gte: dateThreshold } }).sort({ date: -1 });
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getRecentlyViewed = async (req, res) => {
  try {
    let products = await Product.find({}).sort({ viewedAt: -1 }).limit(4);
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
