class View {
  // eslint-disable-next-line class-methods-use-this
  transactionsPrinter = (transactions) => {
    let output = 'date || credit || debit || balance \n';
    transactions.forEach((transaction) => {
      const line = [transaction.date.toLocaleDateString(),
        ...(transaction.type === 'credit' ? [transaction.sum, null] : [null, transaction.sum]),
        transaction.balance];
      output = output.concat(line.join(' || '), '\n');
    });
    console.log(output);
  };
}

module.exports = View;
