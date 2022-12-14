/* eslint-disable class-methods-use-this */
class Account {
  constructor(id = this.#createId()) {
    this.balance = 0;
    this.id = id;
  }

  getId = () => this.id;

  getBalance = () => this.balance;

  topUp = (sum) => {
    this.balance += sum;
  };

  withdraw = (sum) => {
    this.balance -= sum;
  };

  #createId = () => Math.floor(Math.random() * Date.now());
}

module.exports = Account;
