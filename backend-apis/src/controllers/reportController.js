const Product = require('../models/Product');
const Order = require('../models/Order');

const getInventoryReport = async (req, res) => {
    try {
        const products = await Product.find();
        const totalStockValue = products.reduce((acc, product) => acc + product.price * product.current_stock, 0);
        res.json({ totalStockValue });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getOrderStatistics = async (req, res) => {
    try {
        const orders = await Order.aggregate([
            { $group: { _id: '$status', totalOrders: { $sum: 1 }, totalQuantity: { $sum: '$quantity' } } }
        ]);
        res.json(orders);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getInventoryReport, getOrderStatistics };
