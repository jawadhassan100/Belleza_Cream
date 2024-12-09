const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String, // URL of the image
      required: true,
    },
  ],

  ingredients: [
    {
      type: String, // List of ingredients
    },
  ],

  reviews: [
    {
      user: String,
      rating: Number,
      comment: String,
    },
  ],

}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
