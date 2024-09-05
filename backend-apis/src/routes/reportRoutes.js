const express = require('express');
const { getInventoryReport, getOrderStatistics } = require('../controllers/reportController');
const authenticateToken = require('../middlewares/auth');
const router = express.Router();

router.get('/inventory', authenticateToken, getInventoryReport);
router.get('/orders', authenticateToken, getOrderStatistics);

module.exports = router;
