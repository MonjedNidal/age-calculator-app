import React from "react";

function ResultSection({ yearResult, monthResult, dayResult }) {
  return (
    <div className="result">
      <h2>
        <span>{!yearResult ? "--" : yearResult}</span>Years
      </h2>
      <h2>
        <span>
          {!monthResult ? (monthResult === 0 ? "0" : "--") : monthResult}
        </span>
        Months
      </h2>
      <h2>
        <span>{!dayResult ? (dayResult === 0 ? "0" : "--") : dayResult}</span>
        Days
      </h2>
    </div>
  );
}

export default ResultSection;
