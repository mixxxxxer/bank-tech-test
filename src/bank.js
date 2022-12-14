/* eslint-disable class-methods-use-this */
const Account = require('./account');

class Bank {
  constructor() {
    this.transactions = [];
    this.currentAccount = null;
  }

  getTransactions = () => this.transactions;

  createAccount = (id) => {
    this.currentAccount = new Account(id);
    return this.currentAccount.getId();
  };

  deleteAccount = () => {
    this.currentAccount = null;
    return 'account deleted!';
  };

  showBalance = () => (this.currentAccount
    ? this.currentAccount.getBalance()
    : 'account does not exist');

  deposit = (sum) => {
    if (Boolean(this.currentAccount) && this.#isValidValue(sum)) {
      this.currentAccount.topUp(Number(sum));
      this.#createTransaction('debit', sum);
      return ('deposit success');
    }
    return ('deposit false');
  };

  withdraw = (sum) => {
    if (Boolean(this.currentAccount)
        && this.#isValidValue(sum)
        && sum <= this.currentAccount.getBalance()) {
      this.currentAccount.withdraw(Number(sum));
      this.#createTransaction('credit', sum);
      return ('withdraw success');
    }
    return ('withdraw false');
  };

  #createTransaction = (type, sum) => {
    this.transactions.unshift({
      account: this.currentAccount.getId(),
      date: new Date(),
      type,
      sum,
      balance: this.currentAccount.getBalance(),
    });
  };

  #isValidValue = (sum) => (/^([1-9]\d*)(\.[0-9]{1,2})?$/).test(sum);
}

module.exports = Bank;
