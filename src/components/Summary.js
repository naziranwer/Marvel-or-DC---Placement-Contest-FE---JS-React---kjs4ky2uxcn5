import React from "react";

function Summary({ formData }) {
  return (
    <div id="summary">
      <h2>Summary</h2>
      <p>Form Type: {formData.formType}</p>
      <p>Age: {formData.age}</p>
      <p>Show Name: {formData.show}</p>
    </div>
  );
}

export default Summary;
