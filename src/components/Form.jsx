import FormInput from "./FormInput";
import { useState } from "react";

function Form({ setYearResult, setMonthResult, setDayResult }) {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  const [isValidDay, setIsValidDay] = useState(true);
  const [isValidMonth, setIsValidMonth] = useState(true);
  const [isValidYear, setIsValidYear] = useState(true);

  const handleCalculateAge = () => {
    if (!day || !month || !year) {
      if (!day) {
        setIsValidDay(false);
      }
      if (!month) {
        setIsValidMonth(false);
      }
      if (!year) {
        setIsValidYear(false);
      }
      return;
    }

    if (isValidDay && isValidMonth && isValidYear) {
      const today = new Date();
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth() + 1;
      const currentDay = today.getDate();

      let ageYears = currentYear - year;
      let ageMonths = currentMonth - month;
      let ageDays = currentDay - day;

      if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
      }

      if (ageDays < 0) {
        const daysInLastMonth = new Date(
          currentYear,
          currentMonth - 1,
          0
        ).getDate();
        ageMonths--;
        ageDays += daysInLastMonth;
      }

      setYearResult(ageYears);
      setMonthResult(ageMonths);
      setDayResult(ageDays);
    }
  };
  return (
    <div>
      <div className="d-flex flex-row inputsContainer">
        <FormInput
          labelText="day"
          placeholder="DD"
          pattern="^(?:[1-9]|[12]\d|3[01])$"
          errorMessege="Must be a valid day"
          isInputValid={isValidDay}
          setIsInputValid={setIsValidDay}
          setInputValue={setDay}
        />
        <FormInput
          labelText="month"
          placeholder="MM"
          pattern={"^(?:1[0-2]|[1-9])$"}
          errorMessege="Must be a valid month"
          isInputValid={isValidMonth}
          setIsInputValid={setIsValidMonth}
          setInputValue={setMonth}
        />
        <FormInput
          labelText="year"
          placeholder="YYYY"
          errorMessege="Must be a valid past year"
          isInputValid={isValidYear}
          setIsInputValid={setIsValidYear}
          setInputValue={setYear}
        />
      </div>
      <div className="divider">
        <hr />
        <div
          className="iconArrow"
          onClick={() => {
            handleCalculateAge();
          }}
        ></div>
      </div>
    </div>
  );
}

export default Form;
