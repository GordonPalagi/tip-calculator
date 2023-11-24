import React from "react";

const TipButton = ({ index, percent, isSelected, tipPercentage, onClick }) => {
  return (
    <button
      className={isSelected ? "selected-tip-button" : "tip-button"}
      onClick={onClick}
    >
      {tipPercentage}
      {percent}
    </button>
  );
};

export default TipButton;
