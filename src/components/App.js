import React, { useState } from "react";
import FormA from "./FormA";
import FormB from "./FormB";
import Summary from "./Summary";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [age, setAge] = useState("");
  const [formType, setFormType] = useState("");

  const handleAgeChange = (event) => {
    const newAge = event.target.value;
    setAge(newAge);
  };

  const handleFormTypeChange = (event) => {
    const newFormType = event.target.value;
    setFormType(newFormType);
    setStep(1); // Reset step to 1 when form type changes
  };

  const handleSubmitForm = (selectedShow) => {
    setFormData({
      age: age,
      formType: formType === "Form A" ? "Form A" : "Form B",
      show: selectedShow,
    });
    setStep(4); // Move to summary step
  };

  const handleStartOver = () => {
    setAge("");
    setFormType("");
    setFormData({});
    setStep(1);
  };

  return (
    <div>
      {step === 1 && (
        <div id="start-page">
          <h1>Step 1: Select Form Type and Enter Age</h1>
          <label>
            Enter your age:
            <input type="number" value={age} onChange={handleAgeChange} />
          </label>
          <br />
          <label>
            Select Form Type:
            <select value={formType} onChange={handleFormTypeChange}>
              <option value="">--Select--</option>
              <option value="Form A">Form A</option>
              <option value="Form B">Form B</option>
            </select>
          </label>
          <br />
        </div>
      )}
      {step === 2 && formType === "Form A" && (
        <div>
          <FormA age={age} onSubmit={handleSubmitForm} />
        </div>
      )}
      {step === 3 && formType === "Form B" && (
        <div>
          <FormB age={age} onSubmit={handleSubmitForm} />
        </div>
      )}
      {(step === 2 || step === 3) && age ? (
        <button id="go-back" onClick={() => setStep(1)}>
          Go Back
        </button>
      ) : null}
      {step === 4 && (
        <div>
          <Summary formData={formData} />
          <button id="start-over" onClick={handleStartOver}>
            Start Over
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
