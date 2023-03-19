import React, {useState} from "react";
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
    {
        date: new Date(2023, 0, 10),
        title: 'New book',
        amount: 30.99
    },
    {
        date: new Date(2023, 0, 10),
        title: 'New jeans',
        amount: 99.99
    },
    {
        date: new Date(2023, 0, 10),
        title: 'New bag',
        amount: 199.99
    }
]

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE)

    const addExpenseHandler = (expense) => {
        console.log('In App.js')
        setExpenses((previousExpenses) => {
            return [expense, ...previousExpenses]
        })
    }
    console.log(expenses)
    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses expenses={DUMMY_EXPENSE}></Expenses>
        </div>
    )
}
export default App;
