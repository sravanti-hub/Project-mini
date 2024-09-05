import React, { createContext, useState, useEffect } from 'react';
import { getSuppliers, addSupplier } from '../api';

export const SupplierContext = createContext();

export const SupplierProvider = ({ children }) => {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        const fetchSuppliers = async () => {
            const response = await getSuppliers();
            setSuppliers(response.data);
        };

        fetchSuppliers();
    }, []);

    const addSupplierHandler = async (supplier) => {
        await addSupplier(supplier);
        setSuppliers([...suppliers, supplier]);
    };

    return (
        <SupplierContext.Provider value={{ suppliers, addSupplier: addSupplierHandler }}>
            {children}
        </SupplierContext.Provider>
    );
};
