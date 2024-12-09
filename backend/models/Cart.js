const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    sessionId: {  // Unique identifier for anonymous users
        type: String,
        required: true,
      },
      
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        default: 1
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Cart', cartSchema);
