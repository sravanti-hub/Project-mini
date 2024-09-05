import React, { useState, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { TextField, Button, Box } from '@mui/material';
import '../styles/ProductForm.css';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [sku, setSku] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [currentStock, setCurrentStock] = useState('');
    const [reorderLevel, setReorderLevel] = useState('');
    const { addProduct } = useContext(ProductContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct({ name, sku, description, price, current_stock: currentStock, reorder_level: reorderLevel });
        setName('');
        setSku('');
        setDescription('');
        setPrice('');
        setCurrentStock('');
        setReorderLevel('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} className="product-form">
            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <TextField label="SKU" value={sku} onChange={(e) => setSku(e.target.value)} required />
            <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <TextField label="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <TextField label="Current Stock" type="number" value={currentStock} onChange={(e) => setCurrentStock(e.target.value)} required />
            <TextField label="Reorder Level" type="number" value={reorderLevel} onChange={(e) => setReorderLevel(e.target.value)} required />
            <Button type="submit" variant="contained" color="primary">Add Product</Button>
        </Box>
    );
};

export default ProductForm;
