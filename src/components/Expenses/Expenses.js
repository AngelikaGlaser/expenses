import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
    let currentYear = 2023

    const yearExpenseFilterHandler = (year) => {
        console.log(`year in expenses.js: ${year}`)
        currentYear = year
        }
    return (
        <Card className="expenses">
            <ExpenseFilter onYearExpenseFilter={yearExpenseFilterHandler}></ExpenseFilter>
            <ExpenseItem expenseData={props.expenses[0]} />
            <ExpenseItem expenseData={props.expenses[1]}/>
        </Card>
    )
}

export default Expenses