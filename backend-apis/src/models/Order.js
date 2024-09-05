const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    order_date: { type: Date, default: Date.now },
    status: { type: String, required: true },
});

module.exports = mongoose.model('Order', OrderSchema);
