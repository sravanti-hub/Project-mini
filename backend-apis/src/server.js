const app = require('./app');
const connectDB = require('./database');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Server error:', err);
        process.exit(1);
    }
};

startServer();
