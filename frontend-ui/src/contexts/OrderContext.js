import React, { createContext, useState, useEffect } from 'react';
import { getOrders, createOrder } from '../api';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await getOrders();
            setOrders(response.data);
        };

        fetchOrders();
    }, []);

    const createOrderHandler = async (order) => {
        await createOrder(order);
        setOrders([...orders, order]);
    };

    return (
        <OrderContext.Provider value={{ orders, createOrder: createOrderHandler }}>
            {children}
        </OrderContext.Provider>
    );
};
