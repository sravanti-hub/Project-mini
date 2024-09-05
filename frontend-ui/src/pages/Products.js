import React from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import { Box, Typography } from '@mui/material';

const Products = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4">Products</Typography>
            <ProductForm />
            <ProductList />
        </Box>
    );
};

export default Products;
