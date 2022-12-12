class Account {
  constructor (id) {
    this.balance = 0;
    this.id = id;
  }
  
  getId = () => {
    return this.id;
  }

  getBalance = () => {
    return this.balance;
  }

  topUp = (sum) => {
    this.balance += sum;
  }

  withdraw = (sum) => {
    this.balance -= sum;
  }
}

module.exports = Account;