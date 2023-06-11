import React, {useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { hover } from '@testing-library/user-event/dist/hover'

export default function CurrencySelection() {

    const {dispatch} = useContext(AppContext)

    
    
    const handleCurrency =(e)=>{
        e.preventDefault()
        dispatch({
            type: "CHG_CURRENCY",
            payload: e.target.value
        })
    }
  return (
    <div >
        <select class="form-select bg-success text-white fw-bold" aria-label="Default select example" style={{height: '57px'}} onClick={(event)=>handleCurrency(event)}> 
                {/* <option>Currency {currency}</option> */}
                <option value='£' name='Pound' defaultValue>£ Pound</option>
                <option value='$' name='Dollar'>$ Dollar</option>
                <option value='€' name='Euro'>€ Euro</option>
                <option value='₹' name='Ruppee'>₹ Ruppee</option>
        </select>
    </div>
  )
}
