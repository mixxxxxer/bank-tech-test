

# Bank tech test

## The assignment

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

```bash
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Requirements

- You should be able to interact with your code via a REPL.
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

## Install

If you have already installed Node:
1) Clone this repo to you PC;
2) Go to the project folder:
  ```cd bank-tech-test```
3) Install all modules of this project:
  ```
  % nvm use 19
  % npm install
  ```

If you haven't Node:
You can check the latest Node release on the [releases
page](https://nodejs.org/en/about/releases/). Running `nvm install node` and `nvm use
node` will automatically install and use the latest stable version.

NVM is distributed using github - you can find installation instructions for the latest
version [here](https://github.com/nvm-sh/nvm#installing-and-updating). You'll need to run
a command that looks like this: 

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Once that step is complete, you'll need to reload your ~/.zshrc file:

```
source ~/.zshrc
```

Now, you can install Node using nvm (19 - Node version, used in this project):

```bash
 nvm install node
 nvm use 19
```

## How to use:

To check how the test task works, run the App.js file from the project root directory:
```bash
 cd bank-tech-test
 node app
```
also you can try the basic functions to run the node and import the Bank class:

```bash
 node
```
```node
 const Bank = require('./src/bank');
```

## Test Coverage

100% test cover. To check this, run next command in root folder:
```bash
 npm run --coverage
```
or, if you Jest installed global:
```bash
 jest --coverage
```

## Notes

In this solution, I tried to implement the most simple system according to the given requirement. The Account class represents the data model for a bank account, while the Bank class represents the controller for performing all operations associated with a bank account. Since the account owner is only a user of the bank, transactions are tracked directly at the bank to validate the possibility of a transaction (exclude debiting when there is not enough money in the account, replenishing a non-existent account, etc.). I wanted to bring my solution closer to the MVC structure - Account ( model ) - view - Bank (controller). The creation of a new account is performed by the Bank, since only it can provide access to financial transactions. The View class has only one method for printing a formatted bank statement.

