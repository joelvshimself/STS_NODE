
const express = require('express');
const router = express.Router();
const userService = require('../service/UserService');

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Alice
 *               email:
 *                 type: string
 *                 example: alice@example.com
 *               password:
 *                 type: string
 *                 example: secure123
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       500:
 *         description: Error en el servidor
 */

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const result = await userService.registerUser({ name, email, password });
        res.status(201).json({ message: 'Usuario registrado', data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /users/history:
 *   get:
 *     summary: Obtiene el historial de transacciones del usuario
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Correo del usuario
 *         example: alice@example.com
 *     responses:
 *       200:
 *         description: Lista de transacciones del usuario
 *       500:
 *         description: Error en el servidor
 */

router.get('/history', async (req, res) => {
    try {
        const { email } = req.query;
        const result = await userService.getTransactionHistory(email);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


/**
 * @swagger
 * /users/all:
 *   get:
 *     summary: Obtiene todos los usuarios registrados
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *       500:
 *         description: Error en el servidor
 */

router.get('/all', async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
