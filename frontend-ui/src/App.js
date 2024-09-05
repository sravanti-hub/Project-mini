import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Suppliers from './pages/Suppliers';
import Reports from './pages/Reports';
import { ProductProvider } from './contexts/ProductContext';
import { OrderProvider } from './contexts/OrderContext';
import { SupplierProvider } from './contexts/SupplierContext';

function App() {
    return (
        <Router>
            <ProductProvider>
                <OrderProvider>
                    <SupplierProvider>
                        <Routes>
                            <Route path="/" element={<Products />} />
                            <Route path="/orders" element={<Orders />} />
                            <Route path="/suppliers" element={<Suppliers />} />
                            <Route path="/reports" element={<Reports />} />
                        </Routes>
                    </SupplierProvider>
                </OrderProvider>
            </ProductProvider>
        </Router>
    );
}

export default App;
