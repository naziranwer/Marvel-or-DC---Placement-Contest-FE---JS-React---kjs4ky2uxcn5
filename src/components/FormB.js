import React, { useState, useEffect } from "react";
import Summary from "./Summary";
function FormB({ onSubmit, age }) {
    const [marvelShows, setMarvelShows] = useState("");
    const [formData, setFormData] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (marvelShows != "") {
            setFormData({
                type: "Form B",
                age: age,
                show: marvelShows,
            });
        }
    };

    return formData === "" ? (
        <form id="marvel" onSubmit={handleSubmit}>
            <h2>Form B</h2>
            <label>
                Select Marvel Shows:
                <select onChange={(e) => setMarvelShows(e.target.value)}>
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
            <button id="submit-marvel" type="submit">
                Submit
            </button>
        </form>
    ) : (
        <Summary formData={formData} />
    );
}
export default FormB;
