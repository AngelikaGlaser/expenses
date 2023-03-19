import './Expenses.css';
//import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
   const [filteredYear, setFilteredYear] =
    useState('2023')

    const FilterChangeHandler = (year) => {
        setFilteredYear(year)
        }

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={FilterChangeHandler}></ExpenseFilter>
            <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
        </Card>
    )
}

export default Expenses