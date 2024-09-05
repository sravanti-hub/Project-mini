import React, { useContext } from 'react';
import { OrderContext } from '../contexts/OrderContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import '../styles/OrderList.css';

const OrderList = () => {
    const { orders, createOrder } = useContext(OrderContext);

    return (
        <TableContainer component={Paper} className="order-list">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Product ID</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Order Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell>{order.product_id}</TableCell>
                            <TableCell>{order.quantity}</TableCell>
                            <TableCell>{new Date(order.order_date).toLocaleDateString()}</TableCell>
                            <TableCell>{order.status}</TableCell>
                            <TableCell>
                                <Button onClick={() => createOrder({ ...order, status: 'Completed' })}>Complete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default OrderList;
