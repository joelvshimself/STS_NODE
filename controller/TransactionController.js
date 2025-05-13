
const express = require('express');
const router = express.Router();
const transactionService = require('../service/TransactionService');

/**
 * @swagger
 * /transactions/create:
 *   post:
 *     summary: Crea una nueva transacción
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sender_email
 *               - receiver_email
 *               - amount
 *             properties:
 *               sender_email:
 *                 type: string
 *                 example: alice@example.com
 *               receiver_email:
 *                 type: string
 *                 example: bob@example.com
 *               amount:
 *                 type: number
 *                 example: 100.0
 *     responses:
 *       201:
 *         description: Transacción creada exitosamente
 *       500:
 *         description: Error en el servidor
 */
router.post('/create', async (req, res) => {
    try {
        const result = await transactionService.createTransaction(req.body);
        res.status(201).json({ message: 'Transacción creada', data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


/**
 * @swagger
 * /transactions/validate:
 *   post:
 *     summary: Valida si el usuario puede realizar la transacción
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - amount
 *             properties:
 *               email:
 *                 type: string
 *                 example: alice@example.com
 *               amount:
 *                 type: number
 *                 example: 500.0
 *     responses:
 *       200:
 *         description: Resultado de la validación
 *       500:
 *         description: Error en el servidor
 */
router.post('/validate', async (req, res) => {
    try {
        const result = await transactionService.validateTransaction(req.body);
        res.json({ valid: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
