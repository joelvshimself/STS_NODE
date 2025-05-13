
const Transaction = require('../model/Transaction');

async function createTransaction({ sender_email, receiver_email, amount }) {
    return await Transaction.create(sender_email, receiver_email, amount);
}

async function validateTransaction({ email, amount }) {
    const transactions = await Transaction.getHistoryByEmail(email);
    const total = transactions.reduce((sum, tx) => sum + tx.amount, 0);
    return amount <= total;
}

module.exports = {
    createTransaction,
    validateTransaction
};
