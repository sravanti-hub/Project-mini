import React, { useState, useEffect } from 'react';
import { getInventoryReport, getOrderStatistics } from '../api';
import { Card, CardContent, Typography, Box } from '@mui/material';
import '../styles/ReportDashboard.css';

const ReportDashboard = () => {
    const [inventoryReport, setInventoryReport] = useState({});
    const [orderStats, setOrderStats] = useState({});

    useEffect(() => {
        const fetchReports = async () => {
            const inventoryResponse = await getInventoryReport();
            const orderResponse = await getOrderStatistics();
            setInventoryReport(inventoryResponse.data);
            setOrderStats(orderResponse.data);
        };

        fetchReports();
    }, []);

    return (
        <Box className="report-dashboard">
            <Card>
                <CardContent>
                    <Typography variant="h5">Inventory Report</Typography>
                    <Typography>Total Products: {inventoryReport.totalProducts}</Typography>
                    <Typography>Total Stock Value: ${inventoryReport.totalStockValue}</Typography>
                    <Typography>Products Below Reorder Level: {inventoryReport.lowStockProducts}</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography variant="h5">Order Statistics</Typography>
                    <Typography>Total Orders: {orderStats.totalOrders}</Typography>
                    <Typography>Most Sold Product: {orderStats.mostSoldProduct}</Typography>
                    <Typography>Least Sold Product: {orderStats.leastSoldProduct}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ReportDashboard;
