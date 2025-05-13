

async function getAllUsers() {
    return await User.getAllUsers();
}


const User = require('../model/User');

const Transaction = require('../model/Transaction');

async function registerUser({ name, email, password }) {
    return await User.register(name, email, password);
}


async function getTransactionHistory(email) {
    return await Transaction.getHistoryByEmail(email);
}


module.exports = {
    getAllUsers,
    registerUser,
    getTransactionHistory
};
