const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "enter name"],
        unique: false
    },
    color: {
        type: String,
        required: [true, "enter color"],
        unique: false
    },
    description: {
        type: String,
        required: [true, "enter description"],
        unique: false
    },
    price: {
        type: String,
        required: [true, "enter price"],
        unique: false
    },
    file: {
        type: String,
        required: [true, "enter file"],
        unique: false
    }
});

const Product = mongoose.model("Products", productSchema);

module.exports = Product;