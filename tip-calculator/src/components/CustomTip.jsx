import React from 'react'

function CustomTip({handleCustomTip}) {

    return (

        <div className='custom-tip'>
            <input 
                placeholder='custom' 
                onChange={handleCustomTip}
            />
        </div>
    )
}

export default CustomTip