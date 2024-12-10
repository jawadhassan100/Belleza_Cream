// controllers/productImageController.js
const ProductImage = require('../models/ProductImage');
const cloudinary = require('../config/cloudinary'); // Assuming you have the Cloudinary setup

// Upload an image for a specific product
exports.addImage = async (req, res) => {
  try {
    const { productId } = req.body;  // Ensure that the productId is sent in the request body

    if (!req.file) {
      return res.status(400).json({ msg: "No image was uploaded" });
    }

    // Helper function to upload image to Cloudinary
    const uploadToCloudinary = (file) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "product_images" },
          (error, result) => {
            if (error) return reject(error);
            resolve(result.secure_url);  // Return the Cloudinary URL
          }
        );

        stream.end(file.buffer);  // Send the buffer to Cloudinary
      });
    };

    // Upload image to Cloudinary
    const uploadedImage = await uploadToCloudinary(req.file);

    // Create a new product image record
    const newImage = new ProductImage({
      productId,
      imageUrl: uploadedImage,
    });

    await newImage.save();
    res.status(201).json({ msg: "Image added successfully", newImage });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get all images for a specific product
exports.getImagesByProduct = async (req, res) => {
  try {
    const productId = req.params.productId;

    const images = await ProductImage.find({ productId });

    if (images.length === 0) {
      return res.status(404).json({ msg: "No images found for this product" });
    }

    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.updateImage = async (req, res) => {
    try {
      const imageId = req.params.id;
      const { productId } = req.body;
  
      if (!req.file) {
        return res.status(400).json({ msg: "No image was uploaded" });
      }
  
      // Helper function to upload image to Cloudinary
      const uploadToCloudinary = (file) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "product_images" },
            (error, result) => {
              if (error) return reject(error);
              resolve(result.secure_url);  // Return the Cloudinary URL
            }
          );
  
          stream.end(file.buffer);  // Send the buffer to Cloudinary
        });
      };
  
      // Upload new image to Cloudinary
      const uploadedImage = await uploadToCloudinary(req.file);
  
      // Find the image by its ID and update it
      const updatedImage = await ProductImage.findByIdAndUpdate(
        imageId,
        { imageUrl: uploadedImage, productId },
        { new: true } // Return the updated document
      );
  
      if (!updatedImage) {
        return res.status(404).json({ msg: "Image not found" });
      }
  
      res.status(200).json({ msg: "Image updated successfully", updatedImage });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

// Delete a specific image
exports.deleteImage = async (req, res) => {
  try {
    const imageId = req.params.id;

    const deletedImage = await ProductImage.findByIdAndDelete(imageId);

    if (!deletedImage) {
      return res.status(404).json({ msg: "Image not found" });
    }

    res.status(200).json({ msg: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
