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

// Creating endpoint for fetching all products in ascending order
app.get('/allproducts', async (req, res) => {
  try {
    let products = await Product.find({}).sort({ date: -1 });
    console.log("All products retrieved in ascending order");

    res.status(200).send(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// Creating endpoint for Recently Published Products
app.get('/recentlypublished', async (req, res) => {
  try {
    // console.log("Received request to /recentlypublished");

    const days = parseInt(req.query.days) || 7;
    // console.log(`Filtering products from the last ${days} days`);

    const dateThreshold = new Date();
    dateThreshold.setDate(dateThreshold.getDate() - days);
    // console.log(`Date threshold: ${dateThreshold}`);

    // Use the 'date' field from your schema to filter recently published products
    let products = await Product.find({ date: { $gte: dateThreshold } }).sort({ date: -1 });
    // console.log("Products found:", products);

    res.status(200).send(products);
  } catch (error) {
    console.error("Error retrieving recently published products:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// Creating endpoint for Recently Viewed Data
app.get('/recentlyviewed', async (req, res) => {
  try {
   
    let products = await Product.find({}).sort({ viewedAt: -1 }).limit(4); // Adjust the limit as needed
    // console.log("Recently viewed products retrieved");

    res.status(200).send(products);
  } catch (error) {
    console.error("Error retrieving recently viewed products:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// Creating middleware for fetch user
const fetchUser = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send({ errors: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, 'secret_ecom');
    req.user = { id: data.user.if }; // Corrected typo
    next();
  } catch (error) {
    res.status(401).send({ errors: "Please authenticate using a valid token" });
  }
};


// Creating endpoint for adding products to cartData
app.post('/addtocart', fetchUser, async (req, res) => {

  try {
    const userId = req.user.id;
    const itemId = req.body.itemId; // Ensure this is consistent
    const userData = await Users.findOne({ _id: userId });

    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }

    // Initialize cartData if it doesn't exist
    if (!userData.cartData) {
      userData.cartData = {};
    }

    // Initialize item count if it doesn't exist
    if (!userData.cartData[itemId]) {
      userData.cartData[itemId] = 0;
    }

    userData.cartData[itemId] += 1;

    // Save the updated cartData
    await Users.findOneAndUpdate(
      { _id: userId },
      { cartData: userData.cartData },
      { new: true } // Return the updated document
    );

    res.status(200).json({ message: "Added", cartData: userData.cartData });
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// creating endpoint to remove products to cartData
app.post('/removefromcart', fetchUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const itemId = req.body.itemId;
    const userData = await Users.findOne({ _id: userId });

    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }

    // Initialize cartData if it doesn't exist
    if (!userData.cartData) {
      userData.cartData = {};
    }

    // Ensure item count is not below zero
    if (userData.cartData[itemId] && userData.cartData[itemId] > 0) {
      userData.cartData[itemId] -= 1;
    }

    // Save the updated cartData
    await Users.findOneAndUpdate(
      { _id: userId },
      { cartData: userData.cartData },
      { new: true } // Return the updated document
    );

    res.status(200).json({ message: "Removed", cartData: userData.cartData });
  } catch (error) {
    console.error('Error removing from cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Creating endpoint to get CartData for each user
app.post('/getcart', fetchUser, async (req, res) => {
  console.log("Get Cart");

  let userData = await Users.findOne({_id:req.user.id});
  res.json(userData.cartData);
})


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
