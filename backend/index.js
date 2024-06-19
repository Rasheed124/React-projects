// port
const port = 4000;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer")
const path =  require("path")

const Product = require("./models/product");

// request will be auto pass through json
app.use(express.json());

// app will connect to port 
app.use(cors());

// Db connection with MongoDB
mongoose.connect("mongodb+srv://rasheeddev:rash123@cluster0.zgb10nw.mongodb.net/e-commerce")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage: storage });

// Serve uploaded images statically
app.use('/images', express.static('upload/images'));


// Route to handle file uploads
app.post("/upload", upload.single('product'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
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
          id:id,
          name:req.body.name,
          image:req.body.image,
          category:req.body.category,
          new_price:req.body.new_price,
          old_price:req.body.old_price,
      });

        await product.save();
        console.log("Product saved:", product);
        
        res.status(201).json({
            success: true,
            product: req.body.name
        });

    } catch (err) {
        console.error("Error saving product:", err);
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
});


// Create route to delete products
app.post('/removeproduct', async (req, res) => {
  try {
    const removedProduct = await Product.findOneAndDelete({ id: req.body.id });

    if (removedProduct) {
      console.log("Product removed:", removedProduct);
      res.json({ success: true, name: req.body.name, message: "Product removed successfully" });
    } else {
      res.status(404).json({ success: false, name: req.body.name, message: "Product not found" });
    }
  } catch (err) {
    console.error("Error removing product:", err);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});


// Creating api for getting all products

app.get('/allproducts', async (req, res) => {
  let products =  await Product.find({});
  console.log("All products Fetched");
  res.send(products)
})


// Api creation
app.get("/", (req, res) => {
  res.send("Express App is running");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



