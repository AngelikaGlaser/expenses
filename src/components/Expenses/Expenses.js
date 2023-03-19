import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";
import React, {useState} from "react";

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
            {filteredExpenses.length === 0 && <p>No expenses found</p>}
            {filteredExpenses.length > 0 &&
                filteredExpenses.map((expense) => {
                    return <ExpenseItem
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    ></ExpenseItem>
                })
            }
        </Card>
    )
}

export default Expenses