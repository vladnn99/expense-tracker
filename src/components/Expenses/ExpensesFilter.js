import React, { useState } from "react";

import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  const [year, setYear] = useState("");
  function handleSelector(event) {
    setYear(event.target.value);
    const saveYear = event.target.value;
    props.onSelect(saveYear);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={handleSelector}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
