// productController.js

const Product = require('../models/Product.js');
const fs = require('fs'); // Required for file system operations
const path = require('path');

// Function to retrieve all products
module.exports.product_index = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Function to handle product creation with image upload
module.exports.product_create = async (req, res) => {
    const { name, color, description, price } = req.body;
    const { image } = req.files; // Assuming you're using a file upload library like multer

    try {
        // Check if image was uploaded
        if (!image) {
            throw new Error('No image uploaded');
        }

        // Create new product instance
        const product = new Product({ name, color, description, price });

        // Generate a unique filename for the uploaded image
        const imageName = `${Date.now()}_${image.name}`;

        // Move the uploaded image file to a designated folder on your server
        const imagePath = path.join(__dirname, '../uploads', imageName);
        await image.mv(imagePath);

        // Set the image path in the product data
        product.image = imagePath;

        // Save the product to the database
        const savedProduct = await product.save();

        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to create product' });
    }
};

// Function to handle product update
module.exports.product_update = async (req, res) => {
    try {
        const productId = req.params.id;
        const { name, color, description, price } = req.body;

        // Find the product by ID
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Update product properties
        product.name = name;
        product.color = color;
        product.description = description;
        product.price = price;

        // Save the updated product
        const updatedProduct = await product.save();

        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to update product' });
    }
};

// Function to handle product deletion
module.exports.product_delete = async (req, res) => {
    try {
        const productId = req.params.id;

        // Find the product by ID and delete it
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json(deletedProduct);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to delete product' });
    }
};

