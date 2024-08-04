const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const dotenv = require("dotenv");
const stripe = require('stripe')(process.env.STRIPE_SECRET);


const http = require('http');
const server = http.createServer(express);
const {Server} = require('socket.io');
const io = new Server(server, {
  cors: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PATCH', "DELETE"]
})





const { dbConnection } = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const productRoutes = require('./routes/productRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const { fetchUser } = require('./middleware/authMiddleware');


// New Added routes
const userRoutes = require('./routes/userRoutes');



dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to database
dbConnection();

// Serve uploaded images statically
app.use("/images", express.static("upload/images"));



// New Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);


// Routes
app.use('/auth', authRoutes);
// app.use('/products', productRoutes);
app.use('/upload', uploadRoutes);



app.post('/api/create-payment', async(req, res)=> {
  const {amount} = req.body;
  console.log(amount);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card']
    });
    res.status(200).json(paymentIntent)
  } catch (e) {
    console.log(e.message);
    res.status(400).json(e.message);
   }
})


// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// app.set('socketio', io);