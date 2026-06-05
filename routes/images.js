const express = require('express');
const router = express.Router();

// Product images data
const productImages = {
  1: '/images/shoe1.jpg',
  2: '/images/shoe2.jpg',
  3: '/images/shoe3.jpg',
  4: '/images/shoe4.jpg',
  5: '/images/shoe5.jpg',
  6: '/images/shoe6.jpg'
};

router.get('/:productId', (req, res) => {
  const img = productImages[req.params.productId];
  img ? res.json({ success: true, image: img }) : res.status(404).json({ error: 'Image not found' });
});

module.exports = router;
