import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,dispatch, currency } = useContext(AppContext);

    const[budgetvalue, setBudgetValue] = useState(budget)



    console.log("budget new: ", budgetvalue)
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span> <input type='number' value={budgetvalue} max={20000} step="10" onChange={(event)=>{setBudgetValue(event.target.value); dispatch({type: 'SET_BUDGET', payload: budgetvalue})}} />
        </div>
    );
};
export default Budget;
