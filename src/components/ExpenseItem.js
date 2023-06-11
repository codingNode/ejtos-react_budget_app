import React, { useContext } from 'react';
import { ImMinus, ImPlus } from "react-icons/im";
import { MdDeleteForever} from "react-icons/md";
import { AppContext } from '../context/AppContext';


const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)} className='ms-5 bg-success  border border-0 rounded-circle' style={{width: '30px', height: '30px'}}><span className='text-white fw-bold'><ImPlus className='mb-1'/></span></button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)} className='ms-5 bg-danger text-white fw-bold border border-0 rounded-circle' style={{width: '30px', height: '30px'}}><ImMinus className='mb-1' /></button></td>
        <td><button onClick={handleDeleteExpense} className='ms-3 fw-bold border border-0 rounded-circle'><MdDeleteForever className='mb-1' /></button></td>
        </tr>
    );
};

export default ExpenseItem;