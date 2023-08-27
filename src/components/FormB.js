import React, { useState } from "react";

function FormB({ onSubmit, age }) {
  const [selectedShow, setSelectedShow] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedShow) {
      onSubmit(selectedShow);
    }
  };

  const handleShowChange = (event) => {
    setSelectedShow(event.target.value);
  };

  return (
    <form id="marvel" onSubmit={handleSubmit}>
      <h2>Form B</h2>
      <label>
        Select Marvel Shows:
        <select value={selectedShow} onChange={handleShowChange}>
          <option value="">--Select--</option>
          <option value="WandaVision">WandaVision</option>
          <option value="The Falcon and the Winter Soldier">
            The Falcon and the Winter Soldier
          </option>
          <option value="Loki">Loki</option>
          <option value="What If...?">What If...?</option>
        </select>
      </label>
      <br />
      <label>
        Enter your age:
        <input type="number" value={age} disabled />
      </label>
      <br />
      <button id="submit-marvel" type="submit" disabled={!selectedShow}>
        Submit
      </button>
    </form>
  );
}

export default FormB;
