const Order = require('../models/Order');
const Product = require('../models/Product');

const createOrder = async (req, res) => {
    const { product_id, quantity, status } = req.body;

    try {
        const order = new Order({ product_id, quantity, status });
        await order.save();

        // Update product stock
        const product = await Product.findById(product_id);
        product.current_stock -= quantity;
        await product.save();

        // Check if stock is below reorder level
        if (product.current_stock < product.reorder_level) {
            // Create purchase order logic
            // This is an example, you need to implement the purchase order creation logic
            console.log(`Product ${product.sku} stock is low. Consider creating a purchase order.`);
        }

        res.status(201).send('Order created');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('product_id');
        res.json(orders);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { createOrder, getOrders };
