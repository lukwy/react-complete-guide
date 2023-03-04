import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onFilterChange={filterChangedHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
