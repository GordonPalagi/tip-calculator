import "./App.css";
import { useEffect, useState } from "react";
import Bill from "./components/Bill";
import NumOfPeople from "./components/NumOfPeople";
import TipSection from "./components/TipSection";
import PercentageButtons from "./components/PercentageButtons";
import CustomTip from "./components/CustomTip";

function App() {
  const [billTotal, setBillTotal] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedTipIndex, setSelectedTipIndex] = useState(null);

  const handleClick = (index) => {
    if (typeof tipPercentages[index] === "number") {
      setTipPercentage(tipPercentages[index]);
      setSelectedTipIndex(index);
    } else {
      setSelectedTipIndex(null);
      setTipPercentage(0);
    }
  };

  const handleCustomTip = (e) => {
    setTipPercentage(e.target.value);
  };

  const handleBillChange = (e) => {
    setBillTotal(e.target.value);
  };

  const handleNumberOfPeopleChange = (e) => {
    setNumberOfPeople(e.target.value);
  };

  const handleReset = () => {
    setBillTotal(0);
    setTipPercentage(0);
    setTipAmount(0);
    setNumberOfPeople(1);
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const tipPercentages = [
    15,
    18,
    20,
    22,
    25,
    <CustomTip handleCustomTip={handleCustomTip} />,
  ];
  const tipPerPerson = Math.floor((tipAmount / numberOfPeople) * 100) / 100;

  useEffect(() => {
    const calculateTip = ({ billTotal, tipPercentage, numberOfPeople }) => {
      if (billTotal > 0 && tipPercentage > 0 && numberOfPeople > 0) {
        let tipAmount = billTotal * (tipPercentage / 100);
        setTipAmount(tipAmount);
      }
    };

    calculateTip({ billTotal, tipPercentage, numberOfPeople });
  }, [billTotal, tipPercentage, numberOfPeople]);

  const totalPerPerson =
  Math.floor((billTotal / numberOfPeople + tipPerPerson) * 100) / 100;

  return (
    <div className="App">
      <h1 className="title">
        <span>spli</span>
        <span>tter</span>
      </h1>
      <div className="calculator-body">
        <div className="calculator-interface">
          <div>
            <div className="wrapper">
              <Bill
                onFocus={handleFocus}
                billTotal={billTotal}
                handleBillChange={handleBillChange}
              />
            </div>

            <PercentageButtons
              tipPercentages={tipPercentages}
              handleClick={handleClick}
              selectedTipIndex={selectedTipIndex}
            />

            <div className="wrapper">
              <NumOfPeople
                numberOfPeople={numberOfPeople}
                handleNumberOfPeopleChange={handleNumberOfPeopleChange}
              />
            </div>
          </div>
        </div>
          <div className="end-total">
            <TipSection title="Tip Amount" caluculatedValue={tipPerPerson} />
            <TipSection title="Total" caluculatedValue={totalPerPerson} />
            <button className="reset-button" onClick={handleReset}>
              RESET
            </button>
          </div>
      </div>
    </div>
  );
}

export default App;
