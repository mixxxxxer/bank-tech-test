const Bank = require('./src/bank');
const View = require('./src/view')

const techBank = new Bank();
const terminalBank = new View();

techBank.createAccount()
techBank.deposit(1000);
techBank.deposit(2000);
techBank.withdraw(500);

terminalBank.transactionsPrinter(techBank.getTransactions());
