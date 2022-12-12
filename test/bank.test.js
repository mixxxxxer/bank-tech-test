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
})