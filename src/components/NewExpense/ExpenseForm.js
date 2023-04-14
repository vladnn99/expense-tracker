import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  function titleChangeHandler(event) {
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
    setEnteredTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
    setEnteredAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control"></div>
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control"></div>
        <label>Amount</label>
        <input
          type="number"
          value={enteredAmount}
          min="0.01"
          step="0.01"
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control"></div>
        <label>Date</label>
        <input
          type="date"
          value={enteredDate}
          min="2019-01-01"
          max="2023-12-31"
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__actions">
        {props.cancelButtonState ? (
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
        ) : null}
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
