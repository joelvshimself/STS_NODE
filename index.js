
require('dotenv').config();
const express = require('express');
const app = express();
const { swaggerUi, swaggerSpec } = require('./swagger');
const port = process.env.PORT || 3000;

const userRoutes = require('./controller/UserController');
const transactionRoutes = require('./controller/TransactionController');

app.use(express.json());
app.use('/users', userRoutes);
app.use('/transactions', transactionRoutes);
app.get('/', (req, res) => {
  res.send('OLA MUNDO');
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
