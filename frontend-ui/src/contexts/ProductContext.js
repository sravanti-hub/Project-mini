import React, { createContext, useState, useEffect } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../api';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getProducts();
            setProducts(response.data);
        };

        fetchProducts();
    }, []);

    const addProductHandler = async (product) => {
        await addProduct(product);
        setProducts([...products, product]);
    };

    const updateProductHandler = async (id, updatedProduct) => {
        await updateProduct(id, updatedProduct);
        setProducts(products.map(p => (p.id === id ? updatedProduct : p)));
    };

    const deleteProductHandler = async (id) => {
        await deleteProduct(id);
        setProducts(products.filter(p => p.id !== id));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct: addProductHandler, editProduct: updateProductHandler, removeProduct: deleteProductHandler }}>
            {children}
        </ProductContext.Provider>
    );
};
