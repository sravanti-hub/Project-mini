const Supplier = require('../models/Supplier');
const ProductSupplier = require('../models/ProductSupplier');

const getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.json(suppliers);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const createSupplier = async (req, res) => {
    const { name, contact_info } = req.body;

    try {
        const supplier = new Supplier({ name, contact_info });
        await supplier.save();
        res.status(201).send('Supplier created');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Logic to associate suppliers with products
const associateProductWithSupplier = async (req, res) => {
    const { product_id, supplier_id } = req.body;

    try {
        const association = new ProductSupplier({ product_id, supplier_id });
        await association.save();
        res.status(201).send('Product associated with supplier');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getSuppliers, createSupplier, associateProductWithSupplier };
