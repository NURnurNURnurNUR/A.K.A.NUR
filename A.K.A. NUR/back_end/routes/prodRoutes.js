const express = require('express');
const productController = require('../controllers/prodController');
const router = express.Router();

// GET all products
router.get('/admin/Product', productController.product_index);

// POST create a new product
router.post('/admin/Product', productController.product_create);

// PUT update a product
router.put('/admin/Product/:id', productController.product_update);

// DELETE delete a product
router.delete('/admin/Product/:id', productController.product_delete);

module.exports = router;
