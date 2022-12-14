/* eslint-disable no-undef */
const Bank = require('../src/bank');

describe('Bank unit tests', () => {
  it('basic init test', () => {
    const testBank = new Bank();
    expect(testBank.getTransactions()).toEqual([]);
  });

  it('createAccount with id=1 should return id of the new account', () => {
    const testBank = new Bank();
    const id = testBank.createAccount(1);
    expect(id).toEqual(1);
  });

  it('createAccount with random id should return random id', () => {
    const testBank = new Bank();
    const id = testBank.createAccount();
    expect(id).not.toBeNull();
  });

  it('deleted account should return "account does not exist"', () => {
    const testBank = new Bank();
    testBank.createAccount();
    testBank.deleteAccount();
    expect(testBank.showBalance()).toEqual('account does not exist');
  });

  it('showBalance for non-existent account', () => {
    const testBank = new Bank();
    const result = testBank.showBalance();
    expect(result).toBe('account does not exist');
  });

  it('showBalance after deposit 4000 should return 4000', () => {
    const testBank = new Bank();
    testBank.createAccount();
    const response = testBank.deposit(4000);
    const result = testBank.showBalance();
    expect(response).toEqual('deposit success');
    expect(result).toEqual(4000);
  });

  it('showBalance after incorrect deposit should return 0', () => {
    const testBank = new Bank();
    testBank.createAccount();
    testBank.deposit('-3321');
    const result = testBank.showBalance(1);
    expect(result).toEqual(0);
  });

  it('showBalance after deposit 3000 and withdraw 2000 should return 1000', () => {
    const testBank = new Bank();
    testBank.createAccount();
    const deposit = testBank.deposit(3000);
    const withdraw = testBank.withdraw(2000);
    const result = testBank.showBalance();
    expect(deposit).toEqual('deposit success');
    expect(withdraw).toEqual('withdraw success');
    expect(result).toEqual(1000);
  });

  it('showBalance after deposit 3000 and withdraw 4000 should return 3000', () => {
    const testBank = new Bank();
    testBank.createAccount();
    const deposit = testBank.deposit(3000);
    const withdraw = testBank.withdraw(4000);
    const result = testBank.showBalance();
    expect(deposit).toEqual('deposit success');
    expect(withdraw).toEqual('withdraw false');
    expect(result).toEqual(3000);
  });

  it('wrong input test', () => {
    const testBank = new Bank();
    testBank.createAccount();
    const deposit = testBank.deposit({ sum: 3000 });
    const withdraw = testBank.withdraw(undefined);
    const result = testBank.showBalance();
    expect(deposit).toEqual('deposit false');
    expect(withdraw).toEqual('withdraw false');
    expect(result).toEqual(0);
  });

  it('transactions inclide debet and credit operation', () => {
    const testBank = new Bank();
    testBank.createAccount();
    testBank.deposit(3000);
    testBank.withdraw(1000);
    const transactions = testBank.getTransactions();
    expect(transactions).toHaveLength(2);
    expect(transactions[0].type).toBe('debit');
    expect(transactions[1].type).toBe('credit');
  });
});
