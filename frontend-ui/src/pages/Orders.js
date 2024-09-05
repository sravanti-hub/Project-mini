import React from 'react';
import OrderList from '../components/OrderList';
import { Box, Typography } from '@mui/material';

const Orders = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4">Orders</Typography>
            <OrderList />
        </Box>
    );
};

export default Orders;
