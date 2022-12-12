

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
  nvm use 19
  npm install
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

```
$ nvm install node
$ nvm use 19
```

## How to use:

