
const express = require('express');
const router = express.Router();
const userService = require('../service/UserService');

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const result = await userService.registerUser({ name, email, password });
        res.status(201).json({ message: 'Usuario registrado', data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/history', async (req, res) => {
    try {
        const { email } = req.query;
        const result = await userService.getTransactionHistory(email);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



router.get('/all', async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
