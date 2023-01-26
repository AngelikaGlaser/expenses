import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        <div className="expenses">
            <ExpenseItem expenseData={props.expenseData[0]} />
            <ExpenseItem expenseData={props.expenseData[1]}/>
        </div>
    )
}

export default Expenses