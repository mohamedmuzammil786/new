const express = require('express');
const router = express.Router();

const METHODS = { COD: 'Cash on Delivery', GPAY: 'Google Pay', CARD: 'Card' };

router.post('/process', (req, res) => {
  const { amount, method, customer } = req.body;
  if (!METHODS[method]) return res.status(400).json({ error: 'Invalid payment method' });
  
  const orderId = `ORD-${Date.now()}`;
  const receipt = {
    orderId,
    amount: parseFloat(amount).toFixed(2),
    method: METHODS[method],
    timestamp: new Date().toLocaleString(),
    customer,
    status: 'Confirmed'
  };
  
  res.json({ success: true, orderId, receipt, message: `Payment via ${METHODS[method]} confirmed!` });
});

module.exports = router;
