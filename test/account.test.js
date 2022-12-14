/* eslint-disable no-undef */
const Account = require('../src/account');

describe('Account', () => {
  it('init data test - return balance 0 and random id', () => {
    const testAccount = new Account();
    const balance = testAccount.getBalance();
    const id = testAccount.getId();
    expect(Boolean(id)).toEqual(true);
    expect(balance).toBe(0);
  });

  it('init data test - should return id and balance 0', () => {
    const testAccount = new Account('1');
    expect(testAccount.getId()).toBe('1');
    expect(testAccount.getBalance()).toEqual(0);
  });

  it('deposit 1000 return balance 1000', () => {
    const testAccount = new Account('1');
    testAccount.topUp(1000);
    const result = testAccount.getBalance();
    expect(result).toBe(1000);
  });

  it('deposit 3 x 1000 return balance 3000', () => {
    const testAccount = new Account('1');
    testAccount.topUp(1000);
    testAccount.topUp(1000);
    testAccount.topUp(1000);
    const result = testAccount.getBalance();
    expect(result).toBe(3000);
  });

  it('deposit 5000 and withdraw 2200 return balance 2800', () => {
    const testAccount = new Account('1');
    testAccount.topUp(5000);
    testAccount.withdraw(2200);
    const result = testAccount.getBalance();
    expect(result).toBe(2800);
  });
});
