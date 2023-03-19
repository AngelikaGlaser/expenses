import React, {useState} from "react";
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
    {
        id: 'e1',
        date: new Date(2023, 0, 10),
        title: 'New book',
        amount: 30.99
    },
    {
        id: 'e2',
        date: new Date(2023, 0, 10),
        title: 'New jeans',
        amount: 99.99
    },
    {
        id: 'e3',
        date: new Date(2024, 0, 10),
        title: 'New bag',
        amount: 199.99
    }
]

const App = () => {
    const [currentYear, setCurrentYear] = useState(2023)
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE)

    const addExpenseHandler = (expense) => {
        setExpenses((previousExpenses) => {
            return [expense, ...previousExpenses]
        })
    }

    const changeYearHandler = (year) => {
        setCurrentYear((previousYear) => {
            return year
        })
    }
    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses onYearHandler={changeYearHandler} expenses={expenses}  filteredYear={currentYear}></Expenses>
        </div>
    )
}
export default App;
