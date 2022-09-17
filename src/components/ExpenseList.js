import ExpenseItem from './ExpenseItem';

import './ExpenseList.css';

const buildExpenseItemList = (expenses) => {
  let expenseList = [];
  expenses.forEach((expense, index) => {
    expenseList.push(
      <ExpenseItem
        key={index}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  return expenseList;
};

function ExpenseList(props) {
  return (
    <div className="expense-list">{buildExpenseItemList(props.expenses)}</div>
  );
}

export default ExpenseList;
