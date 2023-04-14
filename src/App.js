import React, { useState } from "react";
import { ReactDOM } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/Expenses.css";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense) {
    console.log("In App.js");
    console.log(expense);
    setExpenses((prevValue) => {
      return [expense, ...prevValue];
    });
  }

  return (
    <div>
      <h2>
        <NewExpense onAddExpense={addExpenseHandler} />
      </h2>
      <div>
        <Expenses source={expenses} />
      </div>
      <div></div>
    </div>
  );
}

export default App;
