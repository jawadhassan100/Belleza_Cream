const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/add', cartController.addToCart);

router.get('/:sessionId', cartController.viewCart);

router.put('/update-quantity', cartController.updateQuantity); 

router.delete('/remove/:sessionId/:productId', cartController.removeFromCart);

module.exports = router;
