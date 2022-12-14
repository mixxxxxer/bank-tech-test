/* eslint-disable class-methods-use-this */
/**
 * Account class represent basic instant of bank account
 */
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

  /**
   * Generate random Id:
   * @returns id
   */
  #createId = () => Math.floor(Math.random() * Date.now());
}

module.exports = Account;
