const Bank = require('../src/bank');

describe ('Bank unit tests', ()=> {
  it('basic init test', ()=>{
    const testBank = new Bank();
    expect(testBank.getTransactions()).toEqual([]);
  })

  it('createAccount should return id of the new account', ()=>{
    const testBank = new Bank();
    expect(testBank.createAccount()).toEqual(1);
  }) 

  it('getAccount should return Account object for id = 1', ()=>{
    const testBank = new Bank();
    testBank.createAccount();
    const Account = testBank.getAccount(1);
    expect(Account.getId()).toBe(1);
  })

  it('showBalance for userId = 1 should return 0', () => {
    const testBank = new Bank();
    testBank.createAccount();
    const result = testBank.showBalance(1);
    expect(result).toBe(0);
  })

  it('showBalance for non-existent id should return "user does not exist"', () => {
    const testBank = new Bank();
    const result = testBank.showBalance(2);
    expect(result).toBe("user does not exist");
  })

  it('showBalance after deposite 4000 should return 4000', () => {
    const testBank = new Bank();
    testBank.createAccount();
    testBank.deposite(1,4000,'10-11-2012')
    const result = testBank.showBalance(1);
    expect(result).toEqual(4000);
  })

  it('showBalance after incorrect deposite should return 0', () => {
    const testBank = new Bank();
    testBank.createAccount();
    testBank.deposite(1,'10-11-1111','10-11-2012')
    const result = testBank.showBalance(1);
    expect(result).toEqual(0);
  })
})