import React, { useState, useEffect } from "react";
import "./TemperatureConverter.css";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [kelvin, setKelvin] = useState("");
  const [activeInput, setActiveInput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setActiveInput('celsius');
    
    if (value === "") {
      setFahrenheit("");
      setKelvin("");
      return;
    }

    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setIsLoading(true);
      setTimeout(() => {
        setFahrenheit(((numValue * 9) / 5 + 32).toFixed(1));
        setKelvin((numValue + 273.15).toFixed(1));
        setIsLoading(false);
      }, 200);
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setActiveInput('fahrenheit');
    
    if (value === "") {
      setCelsius("");
      setKelvin("");
      return;
    }

    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setIsLoading(true);
      setTimeout(() => {
        const celsiusValue = ((numValue - 32) * 5) / 9;
        setCelsius(celsiusValue.toFixed(1));
        setKelvin((celsiusValue + 273.15).toFixed(1));
        setIsLoading(false);
      }, 200);
    }
  };

  const handleKelvinChange = (e) => {
    const value = e.target.value;
    setKelvin(value);
    setActiveInput('kelvin');
    
    if (value === "") {
      setCelsius("");
      setFahrenheit("");
      return;
    }

    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setIsLoading(true);
      setTimeout(() => {
        const celsiusValue = numValue - 273.15;
        setCelsius(celsiusValue.toFixed(1));
        setFahrenheit(((celsiusValue * 9) / 5 + 32).toFixed(1));
        setIsLoading(false);
      }, 200);
    }
  };

  const clearAll = () => {
    setCelsius("");
    setFahrenheit("");
    setKelvin("");
    setActiveInput(null);
  };

  const getTemperatureDescription = () => {
    const temp = parseFloat(celsius);
    if (isNaN(temp)) return "";
    
    if (temp < 0) return "Freezing";
    if (temp < 10) return "Very Cold";
    if (temp < 20) return "Cold";
    if (temp < 25) return "Cool";
    if (temp < 30) return "Warm";
    if (temp < 35) return "Hot";
    return "Very Hot";
  };

  return (
    <div className="converter-container">
      <div className="header">
        <h1 className="title">Temperature Converter</h1>
        <p className="subtitle">Convert between Celsius, Fahrenheit, and Kelvin</p>
      </div>
      
      <div className="converter-content">
        <div className="input-group">
          <label htmlFor="celsius" className="input-label">
            Celsius
          </label>
          <div className={`input-wrapper ${isLoading && activeInput !== 'celsius' ? 'loading' : ''}`}>
            <input
              type="number"
              id="celsius"
              className="temperature-input"
              value={celsius}
              onChange={handleCelsiusChange}
              placeholder="Enter temperature"
              step="0.1"
            />
            <span className="unit-label">°C</span>
          </div>
        </div>

        <div className="conversion-arrow">
          <div className="arrow-icon" onClick={clearAll} title="Clear all">
            ⟷
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="fahrenheit" className="input-label">
            Fahrenheit
          </label>
          <div className={`input-wrapper ${isLoading && activeInput !== 'fahrenheit' ? 'loading' : ''}`}>
            <input
              type="number"
              id="fahrenheit"
              className="temperature-input"
              value={fahrenheit}
              onChange={handleFahrenheitChange}
              placeholder="Enter temperature"
              step="0.1"
            />
            <span className="unit-label">°F</span>
          </div>
        </div>

        <div className="conversion-arrow">
          <div className="arrow-icon" onClick={clearAll} title="Clear all">
            ⟷
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="kelvin" className="input-label">
            Kelvin
          </label>
          <div className={`input-wrapper ${isLoading && activeInput !== 'kelvin' ? 'loading' : ''}`}>
            <input
              type="number"
              id="kelvin"
              className="temperature-input"
              value={kelvin}
              onChange={handleKelvinChange}
              placeholder="Enter temperature"
              step="0.1"
              min="0"
            />
            <span className="unit-label">K</span>
          </div>
        </div>

        {celsius && !isNaN(parseFloat(celsius)) && (
          <div className="result-display">
            <div className="result-label">Temperature Description</div>
            <div className="result-value">{getTemperatureDescription()}</div>
          </div>
        )}

        <button className="clear-button" onClick={clearAll}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default TemperatureConverter;