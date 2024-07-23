// port
const port = 4000;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const jwt = require("jsonwebtoken");

const Product = require("./models/product");

const Users = require("./models/user");

// request will be auto pass through json
app.use(express.json());

// app will connect to port
app.use(cors());


// Db connection with MongoDB
mongoose
  .connect(
    "mongodb+srv://rasheeddev:rash123@cluster0.zgb10nw.mongodb.net/e-commerce"
  )
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });

// Serve uploaded images statically
app.use("/images", express.static("upload/images"));

// Route to handle file uploads
app.post("/upload", upload.single("product"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// POST route to add a new product
app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1); // getting last products
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }

  try {
    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
      features: req.body.features, 
      brand: req.body.brand,
    });

    await product.save();
    console.log("Product saved");

    res.status(201).json({
      success: true,
      product: req.body.name,
    });
  } catch (err) {
    console.error("Error saving product:", err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});


// Create route to delete products
app.post("/removeproduct", async (req, res) => {
  try {
    const removedProduct = await Product.findOneAndDelete({ id: req.body.id });

    if (removedProduct) {
      console.log("Product removed:", removedProduct);
      res.json({
        success: true,
        name: req.body.name,
        message: "Product removed successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        name: req.body.name,
        message: "Product not found",
      });
    }
  } catch (err) {
    console.error("Error removing product:", err);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Creating api for getting all products

app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All products Fetched");
  res.send(products);
});

// Creating user Signup Endpoint

app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });

  if (check) {
    return res.status(400).json({
      success: false,
      errors: "existing user",
    });
  }

  let cart = {};

  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }

  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };

  const token = jwt.sign(data, "secret_ecom");
  res.json({
    sucess: true,
    token,
  });
});

// Creating endpoint for user login

app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });

  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          if: user.id,
        },
      };

      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({
        success: false,
        errors: "Wrong Password",
      });
    }
  } else {
    res.json({
      sucess: false,
      errors: "Wrong Email id",
    });
  }
});

// Api creation
app.get("/", (req, res) => {
  res.send("Express App is running");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
