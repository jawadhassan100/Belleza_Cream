const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const productRoutes = require('./productRoutes')
const cartRoutes = require('./cartRoutes')

router.use('/api', authRoutes);
router.use('/product', productRoutes);
router.use('/cart', cartRoutes);


module.exports = router;