import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [editFormVisible, setEditForm] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    const toggleFormHandler = () => {
        setEditForm(!editFormVisible)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onToggleForm={toggleFormHandler} formVisible={editFormVisible}></ExpenseForm>
        </div>
    )
}
export default NewExpense