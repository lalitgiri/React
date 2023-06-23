import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {
  const [filteredValue, filteredValueChange] = useState("2019");

  const filterExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredValue
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredValue}
        onFilterChange={(data) => filteredValueChange(data)}
      />
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList items={filterExpenses} />
    </Card>
  );
}

export default Expenses;
