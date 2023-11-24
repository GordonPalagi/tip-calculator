import React from 'react'

function Bill({billTotal, handleBillChange, onFocus}) {
  return (
    <>
        <label htmlFor="bill">bill</label>
        <div className='bill-input-wrapper'>
            <span>$</span>
            <input className='bill-total' onFocus={onFocus} dir='rtl' value={billTotal} onChange={handleBillChange}/>
        </div>
    </>
  )
}

export default Bill