import React from 'react'
import TipButton from './TipButton';

function PercentageButtons({tipPercentages, handleClick, selectedTipIndex}) {



  return (
    <>
        <label>select tip %</label> {/* select tip % */}
        <div className='tip-input-wrapper'>
        {tipPercentages.map((tipPercentage, index) => {
            return <TipButton 
            key={index} 
            index={index} 
            percent={index === tipPercentages.length - 1 ? '' : '%'}
            isSelected={selectedTipIndex === index}
            tipPercentage={tipPercentage} 
            onClick={() => handleClick(index)}
            />
            })}
        </div>
    </>
  )
}

export default PercentageButtons