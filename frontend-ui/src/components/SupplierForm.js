import React, { useState, useContext } from 'react';
import { SupplierContext } from '../contexts/SupplierContext';
import { TextField, Button, Box } from '@mui/material';
import '../styles/SupplierForm.css';

const SupplierForm = () => {
    const [name, setName] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const { addSupplier } = useContext(SupplierContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addSupplier({ name, contact_info: contactInfo });
        setName('');
        setContactInfo('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} className="supplier-form">
            <TextField label="Supplier Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <TextField label="Contact Information" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} required />
            <Button type="submit" variant="contained" color="primary">Add Supplier</Button>
        </Box>
    );
};

export default SupplierForm;
