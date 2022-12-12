const Account = require('./account')

class Bank {
  constructor () {
    this.transactions = [];
    this.accounts = [];
  }

  getTransactions = () => {
    return this.transactions;
  }

  getAccount = (accountId) => {
    const user = this.accounts.find((account) => account.getId() === accountId);
    return user;
  }

  createAccount = () => {
    const newAccount = new Account(this.createId());
    this.accounts.push(newAccount);
    return newAccount.getId();
  }

  showBalance = (accountId) => {
    const account = this.getAccount(accountId);
    return Boolean(account) ? account.getBalance() : "user does not exist" ;
  }

  deposite = (accountId, sum, date) => {
    const account = this.getAccount(accountId);
    if (Boolean(account) && sum > 0){
      account.topUp(sum);
      const newTransaction = {
        account: accountId,
        date: date,
        type: 'deposite',
        sum: sum
      }
      this.transactions.push(newTransaction);
    } else return 'wrong input'
  }

  private

  createId = () => {
    return this.accounts.length + 1;
  }

}

module.exports = Bank;