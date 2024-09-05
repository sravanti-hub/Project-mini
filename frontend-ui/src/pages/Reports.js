import React from 'react';
import ReportDashboard from '../components/ReportDashboard';
import { Box, Typography } from '@mui/material';

const Reports = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4">Reports</Typography>
            <ReportDashboard />
        </Box>
    );
};

export default Reports;
