import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Mar 28th, 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">294.67</div>
      </div>
    </div>
  );
  // return <h2>Expense item!</h2>
}

export default ExpenseItem;
