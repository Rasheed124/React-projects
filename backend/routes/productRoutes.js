const express = require('express');
const { addProduct, removeProduct, getAllProducts, getRecentlyPublished, getRecentlyViewed } = require('../controllers/productController');
const { fetchUser } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/addproduct', addProduct);
router.post('/removeproduct', removeProduct);
router.get('/allproducts', getAllProducts);
router.get('/recentlypublished', getRecentlyPublished);
router.get('/recentlyviewed', getRecentlyViewed);

// Cart routes
router.post('/addtocart', fetchUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const itemId = req.body.itemId;
    const userData = await Users.findOne({ _id: userId });

    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!userData.cartData) {
      userData.cartData = {};
    }

    if (!userData.cartData[itemId]) {
      userData.cartData[itemId] = 0;
    }

    userData.cartData[itemId] += 1;

    await Users.findOneAndUpdate(
      { _id: userId },
      { cartData: userData.cartData },
      { new: true }
    );

    res.status(200).json({ message: "Added", cartData: userData.cartData });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/removefromcart', fetchUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const itemId = req.body.itemId;
    const userData = await Users.findOne({ _id: userId });

    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!userData.cartData) {
      userData.cartData = {};
    }

    if (userData.cartData[itemId] && userData.cartData[itemId] > 0) {
      userData.cartData[itemId] -= 1;
    }

    await Users.findOneAndUpdate(
      { _id: userId },
      { cartData: userData.cartData },
      { new: true }
    );

    res.status(200).json({ message: "Removed", cartData: userData.cartData });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/getcart', fetchUser, async (req, res) => {
  try {
    const userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
