import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = props => {
    const [addNewExpense, setAddNewExpense] = useState(false);

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setAddNewExpense(false);
    };

    const onClickHandler = () => {
        setAddNewExpense(true);
    };

    const setCancelAddNewExpense = () => {
        setAddNewExpense(false);
    };

    let content = <button onClick={onClickHandler}>Add new expense</button>;

    if (addNewExpense) {
        content = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={setCancelAddNewExpense} />;
    };

    return (
        <div className="new-expense">
            {content}
        </div>
    );
}

export default NewExpense;