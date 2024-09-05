import React from 'react';
import SupplierForm from '../components/SupplierForm';
import SupplierList from '../components/SupplierList';
import { Box, Typography } from '@mui/material';

const Suppliers = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4">Suppliers</Typography>
            <SupplierForm />
            <SupplierList />
        </Box>
    );
};

export default Suppliers;
