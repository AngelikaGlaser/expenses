import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

const Expenses = (props) => {
   const [filteredYear, setFilteredYear] =
    useState('2023')

    console.log('year in expenses.js: ' + filteredYear)

    const FilterChangeHandler = (year) => {
        console.log('Filter change handled by Expense.js')
        console.log(year + ' in Expense.js')
        setFilteredYear(year)
        }

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={FilterChangeHandler}></ExpenseFilter>
            {
                props.expenses.map((expense) => {
                    return <ExpenseItem expenseData={expense}></ExpenseItem>
                })
            }
        </Card>
    )
}

export default Expenses