
const express = require('express');
const router = express.Router();
const transactionService = require('../service/TransactionService');

router.post('/create', async (req, res) => {
    try {
        const result = await transactionService.createTransaction(req.body);
        res.status(201).json({ message: 'Transacción creada', data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post('/validate', async (req, res) => {
    try {
        const result = await transactionService.validateTransaction(req.body);
        res.json({ valid: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
