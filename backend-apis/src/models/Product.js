const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    description: String,
    price: { type: Number, required: true },
    current_stock: { type: Number, required: true, min: 0 },
    reorder_level: { type: Number, required: true, min: 0 },
});

module.exports = mongoose.model('Product', ProductSchema);
