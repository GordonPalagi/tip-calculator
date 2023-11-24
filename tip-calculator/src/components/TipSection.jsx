import React from 'react'

function TipSection({title, caluculatedValue}) {
  return (
    <div className='tip-total-section'>
        <div className='sub'>
            <h4>{title}</h4>
            <p>/ person</p>
        </div>
        <p>${caluculatedValue > 0 ? caluculatedValue : <></>}</p>
    </div>
  )
}

export default TipSection