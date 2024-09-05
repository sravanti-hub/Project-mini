import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import '../styles/ProductList.css';

const ProductList = () => {
    const { products, editProduct, removeProduct } = useContext(ProductContext);

    return (
        <TableContainer component={Paper} className="product-list">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>SKU</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Current Stock</TableCell>
                        <TableCell>Reorder Level</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id} className={product.current_stock < product.reorder_level ? 'low-stock' : ''}>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.sku}</TableCell>
                            <TableCell>{product.description}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.current_stock}</TableCell>
                            <TableCell>{product.reorder_level}</TableCell>
                            <TableCell>
                                <Button onClick={() => editProduct(product.id, { ...product, name: 'Updated Name' })}>Edit</Button>
                                <Button onClick={() => removeProduct(product.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductList;
