const Product = require('../models/Product');
const { setCache, getCache } = require('../services/cache');

const getProducts = async (req, res) => {
    const cacheKey = 'products';
    getCache(cacheKey, async (err, products) => {
        if (err) return res.status(500).send(err.message);

        if (products) {
            return res.json(products);
        }

        try {
            const products = await Product.find();
            setCache(cacheKey, products);
            res.json(products);
        } catch (err) {
            res.status(500).send(err.message);
        }
    });
};

const createProduct = async (req, res) => {
    const { name, sku, description, price, current_stock, reorder_level } = req.body;

    try {
        const product = new Product({ name, sku, description, price, current_stock, reorder_level });
        await product.save();
        res.status(201).send('Product created');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, sku, description, price, current_stock, reorder_level } = req.body;

    try {
        const product = await Product.findByIdAndUpdate(id, { name, sku, description, price, current_stock, reorder_level }, { new: true });
        if (!product) return res.status(404).send('Product not found');
        res.json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) return res.status(404).send('Product not found');
        res.send('Product deleted');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
