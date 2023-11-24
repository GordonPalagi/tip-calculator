import React from 'react'
import { IoMdPersonAdd } from "react-icons/io";


function NumOfPeople({numberOfPeople, handleNumberOfPeopleChange}) {
  return (
    <>
        <label>number of people</label>
        <div className='bill-input-wrapper'>
            <span><IoMdPersonAdd /></span>
            <input className='bill-total' dir='rtl' value={numberOfPeople} onChange={handleNumberOfPeopleChange} />
        </div>
    </>
  )
}

export default NumOfPeople