import { useState } from "react";
import Form from "./Form";
import ResultSection from "./ResultSection";
function MainCard() {
  const [yearResult, setYearResult] = useState(null);
  const [monthResult, setMonthResult] = useState(null);
  const [dayResult, setDayResult] = useState(null);

  return (
    <div className="myCard">
      <Form
        setYearResult={setYearResult}
        setMonthResult={setMonthResult}
        setDayResult={setDayResult}
      />
      <ResultSection
        yearResult={yearResult}
        monthResult={monthResult}
        dayResult={dayResult}
      />
    </div>
  );
}

export default MainCard;
