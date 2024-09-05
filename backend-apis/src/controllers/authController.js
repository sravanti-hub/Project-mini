const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { jwtSecret } = require('../config');

const register = async (req, res) => {
    const { username, password, role } = req.body;

    try {
        const user = new User({ username, password, role });
        await user.save();
        res.status(201).send('User created');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).send('User not found');

        const match = await user.comparePassword(password);
        if (!match) return res.status(400).send('Invalid credentials');

        const token = jwt.sign({ username: user.username, role: user.role }, jwtSecret);
        res.json({ token });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { register, login };
