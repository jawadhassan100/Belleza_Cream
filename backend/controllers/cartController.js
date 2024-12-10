const crypto = require('crypto');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Function to generate a sessionId using crypto
const generateSessionId = () => {
  return crypto.randomBytes(16).toString('hex');  // Generates a 32-character hexadecimal string
};

// Add product to cart
exports.addToCart = async (req, res) => {
  let { sessionId, productId, quantity } = req.body;

  // If sessionId is not provided, generate it
  if (!sessionId) {
    sessionId = generateSessionId();  // Generate a unique sessionId
  }

  try {
    let cart = await Cart.findOne({ sessionId });

    if (cart) {
      const existingProduct = cart.products.find(
        (item) => item.productId.toString() === productId
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;  // Increase quantity if product already in cart
      } else {
        cart.products.push({ productId, quantity });
      }

      await cart.save();
      return res.json(cart);
    } else {
      const newCart = new Cart({
        sessionId,  // Use the generated sessionId
        products: [{ productId, quantity }],
      });
      await newCart.save();
      return res.json(newCart);
    }
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
};

// View cart
exports.viewCart = async (req, res) => {
  const { sessionId } = req.params;

  try {
    const cart = await Cart.findOne({ sessionId }).populate('products.productId');
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }
    return res.json(cart);
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
};


// Update quantity of product in cart
exports.updateQuantity = async (req, res) => {
    const { sessionId, productId, quantity } = req.body;  // Expect sessionId and productId in request body
    if (quantity < 1) return res.status(400).json({ message: 'Quantity cannot be less than 1' });
  
    try {
      // Find the cart based on sessionId
      const cart = await Cart.findOne({ sessionId });
      if (!cart) return res.status(404).json({ message: 'Cart not found' });
  
      // Find the product in the cart
      const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
  
      if (productIndex > -1) {
        // Update the quantity if product is found
        cart.products[productIndex].quantity = quantity;
        await cart.save();
        return res.status(200).json({ message: 'Quantity updated', cart });
      } else {
        return res.status(404).json({ message: 'Product not found in cart' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating quantity', error });
    }
  };

  

// Remove product from cart
exports.removeFromCart = async (req, res) => {
    const { sessionId, productId } = req.params; // Expect sessionId and productId in URL params
  
    try {
      // Find the cart based on sessionId
      const cart = await Cart.findOne({ sessionId });
      if (!cart) return res.status(404).json({ message: 'Cart not found' });
  
      // Remove the product from the cart
      cart.products = cart.products.filter(p => p.productId.toString() !== productId);
  
      if (cart.products.length === 0) {
        // If the cart is empty after removing the product, delete the cart
        await Cart.deleteOne({ sessionId });
        return res.status(200).json({ message: 'Cart is now empty and session removed' });
      }
  
      await cart.save();
      res.status(200).json({ message: 'Product removed from cart', cart });
    } catch (error) {
      res.status(500).json({ message: 'Error removing product from cart', error });
    }
  };
  
