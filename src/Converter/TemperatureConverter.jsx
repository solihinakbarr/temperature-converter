import React, { useState } from "react";
import "./TemperatureConverter.css";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(((value * 9) / 5 + 32).toFixed(2));
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius((((value - 32) * 5) / 9).toFixed(2));
  };

  return (
    <div className="converter-container">
      <h1>Temperature Converter</h1>
      <div className="input-group">
        <label htmlFor="celsius">Celsius</label>
        <input
          type="number"
          id="celsius"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="fahrenheit">Fahrenheit</label>
        <input
          type="number"
          id="fahrenheit"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
    </div>
  );
};

export default TemperatureConverter;
