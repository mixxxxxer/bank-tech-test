const Account = require('./account')

class Bank {
  constructor () {
    this.transactions = [];
    this.accounts = [];
  }

  getTransactions = () => {
    return this.transactions;
  }

  getAccount = (id) => {
    return this.accounts.find((account) => account.getId() === id);
  }

  createAccount = () => {
    const newAccount = new Account(this.accounts.length + 1);
    this.accounts.push(newAccount);
    return newAccount.getId();
  }

}

module.exports = Bank;