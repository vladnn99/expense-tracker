import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState("2021");

  function getYear(yearReceived) {
    console.log(yearReceived);
    setYear(yearReceived);
  }

  const filteredExpenses = props.source.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSelect={getYear} />
        {/* {props.source.map((expense) => {
          return (
            <div>
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            </div>
          );
        })} */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
