const mongoose = require('mongoose');

const ProductSupplierSchema = new mongoose.Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    supplier_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
});

module.exports = mongoose.model('ProductSupplier', ProductSupplierSchema);
