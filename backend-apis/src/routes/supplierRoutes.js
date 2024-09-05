const express = require('express');
const { getSuppliers, createSupplier, associateProductWithSupplier } = require('../controllers/supplierController');
const authenticateToken = require('../middlewares/auth');
const router = express.Router();

router.get('/', authenticateToken, getSuppliers);
router.post('/', authenticateToken, createSupplier);
router.post('/associate', authenticateToken, associateProductWithSupplier);

module.exports = router;
