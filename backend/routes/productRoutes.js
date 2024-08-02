const router = require('express').Router();
const Product = require('../models/product');
const User = require('../models/user');

// Get products
router.get('/', async (req, res) => {
  try {
    const sort = { '_id': -1 };
    const products = await Product.find().sort(sort);
    res.status(200).json(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// Create product
router.post('/', async (req, res) => {
  try {
    const {
      name,
      image,
      category,
      new_price,
      old_price,
      features,
      installationServiceAvailable,
      installationPrice,
      description,
      deliveryInfo,
      stockStatus,
    } = req.body;

    const product = await Product.create({
      name,
      image,
      category,
      new_price,
      old_price,
      features,
      installationServiceAvailable,
      installationPrice,
      description,
      deliveryInfo,
      stockStatus,
    });

    const products = await Product.find();
    res.status(201).json(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// Update product
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const {
      name,
      image,
      category,
      new_price,
      old_price,
      features,
      installationServiceAvailable,
      installationPrice,
      description,
      deliveryInfo,
      stockStatus,
    } = req.body;

    const product = await Product.findByIdAndUpdate(
      id,
      {
        name,
        image,
        category,
        new_price,
        old_price,
        features,
        installationServiceAvailable,
        installationPrice,
        description,
        deliveryInfo,
        stockStatus,
      },
      { new: true }
    );

    const products = await Product.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// delete product

router.delete('/:id', async(req, res)=> {
  const {id} = req.params;
  const {user_id} = req.body;
  try {
    const user = await User.findById(user_id);
    if(!user.isAdmin) return res.status(401).json("You don't have permission");
    await Product.findByIdAndDelete(id);
    const products = await Product.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
})


router.get('/:id', async(req, res)=> {
  const {id} = req.params;
  try {
    const product = await Product.findById(id);
    const similar = await Product.find({category: product.category}).limit(5);
    res.status(200).json({product, similar})
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// router.get('/category/:category', async(req,res)=> {
//   const {category} = req.params;
//   try {
//     let products;
//     const sort = {'_id': -1}
//     if(category == "all"){
//       products = await Product.find().sort(sort);
//     } else {
//       products = await Product.find({category}).sort(sort)
//     }
//     res.status(200).json(products)
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// })

// cart routes

// router.post('/add-to-cart', async(req, res)=> {
//   const {userId, productId, price} = req.body;

//   try {
//     const user = await User.findById(userId);
//     const userCart = user.cart;
//     if(user.cart[productId]){
//       userCart[productId] += 1;
//     } else {
//       userCart[productId] = 1;
//     }
//     userCart.count += 1;
//     userCart.total = Number(userCart.total) + Number(price);
//     user.cart = userCart;
//     user.markModified('cart');
//     await user.save();
//     res.status(200).json(user);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// })

// router.post('/increase-cart', async(req, res)=> {
//   const {userId, productId, price} = req.body;
//   try {
//     const user = await User.findById(userId);
//     const userCart = user.cart;
//     userCart.total += Number(price);
//     userCart.count += 1;
//     userCart[productId] += 1;
//     user.cart = userCart;
//     user.markModified('cart');
//     await user.save();
//     res.status(200).json(user);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// });

// router.post('/decrease-cart', async(req, res)=> {
//   const {userId, productId, price} = req.body;
//   try {
//     const user = await User.findById(userId);
//     const userCart = user.cart;
//     userCart.total -= Number(price);
//     userCart.count -= 1;
//     userCart[productId] -= 1;
//     user.cart = userCart;
//     user.markModified('cart');
//     await user.save();
//     res.status(200).json(user);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// })

// router.post('/remove-from-cart', async(req, res)=> {
//   const {userId, productId, price} = req.body;
//   try {
//     const user = await User.findById(userId);
//     const userCart = user.cart;
//     userCart.total -= Number(userCart[productId]) * Number(price);
//     userCart.count -= userCart[productId];
//     delete userCart[productId];
//     user.cart = userCart;
//     user.markModified('cart');
//     await user.save();
//     res.status(200).json(user);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// })




module.exports = router;
