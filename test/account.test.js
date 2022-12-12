const Account = require('../src/account')

describe('Account', () => {
  it('init data test', () => {
    const testAccount = new Account();
    result = testAccount.getBalance();
    expect(result).toBe(0);
  })
})