import { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    // after the form is submitted, clean it
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <div className="expense-form__controls">
        <div className="expense-form__control">
          <label className="expense-form__label">Title</label>
          <input
            className="expense-form__input"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="expense-form__control">
          <label className="expense-form__label">Amount</label>
          <input
            className="expense-form__input"
            type="text"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="expense-form__control">
          <label className="expense-form__label">Date</label>
          <input
            className="expense-form__input"
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="expense-form__actions">
        <button className="expense-form__button" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
