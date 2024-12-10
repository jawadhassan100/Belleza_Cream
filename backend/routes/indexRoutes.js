const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const productRoutes = require('./productRoutes')
const cartRoutes = require('./cartRoutes')
const orderRoutes = require("./orderRoutes")
const productImageRoutes = require('./productImageRoutes')

router.use('/api', authRoutes);
router.use('/product', productRoutes);
router.use('/cart', cartRoutes);
router.use('/order', orderRoutes); 
router.use('/image', productImageRoutes); 

module.exports = router;