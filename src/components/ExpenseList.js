import ExpenseItem from './ExpenseItem';
import Card from './Card';

import './ExpenseList.css';

// const buildExpenseItemList = (expenses) => {
//   let expenseList = [];
//   expenses.forEach((expense, index) => {
//     expenseList.push(
//       <ExpenseItem
//         key={index}
//         title={expense.title}
//         amount={expense.amount}
//         date={expense.date}
//       />
//     );
//   });

//   return expenseList;
// };

function ExpenseList(props) {
  return (
    <Card className="expense-list">
      {props.expenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default ExpenseList;
