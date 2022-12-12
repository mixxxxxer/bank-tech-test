class Account {
  constructor () {
    this.balance = 0;
    this.transactions = [];
  }

  getBalance = () => {
    return this.balance;
  }
}

module.exports = Account;