import React, { useContext } from 'react';
import { SupplierContext } from '../contexts/SupplierContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import '../styles/SupplierList.css';

const SupplierList = () => {
    const { suppliers } = useContext(SupplierContext);

    return (
        <TableContainer component={Paper} className="supplier-list">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Contact Information</TableCell>
                        <TableCell>Products Supplied</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {suppliers.map((supplier) => (
                        <TableRow key={supplier.id}>
                            <TableCell>{supplier.name}</TableCell>
                            <TableCell>{supplier.contact_info}</TableCell>
                            <TableCell>{supplier.products_supplied.join(', ')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SupplierList;
