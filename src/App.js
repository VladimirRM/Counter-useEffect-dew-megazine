import { Button } from "react-bootstrap";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [intervalValue, setIntervalValue] = useState();

  function Timer({ intervalValue }) {
    const [value, setValue] = useState(0);

    useEffect =
      (() => {
         const intervalId = setInterval(() => {
            setValue((value) => value + 1);
        }, intervalValue);
        return()=>{
             clearInterval()
        }
      },
      [intervalValue]);
    return (
      <div className="container">
        <h1>Timer</h1>
        <h2>{value}</h2>
      </div>
    );
  }

  const handleIntervalClick = () => {
    setIntervalValue();
  };

  return (
    <div className="container">
      <Timer intervalValue={intervalValue}></Timer>
      <Button variant="primary" onClick={() => handleIntervalClick(100)}>
        100ms
      </Button>
      <Button variant="primary" onClick={() => handleIntervalClick(500)}>
        500ms
      </Button>
      <Button variant="primary" onClick={() => handleIntervalClick(1000)}>
        1s
      </Button>
    </div>
  );
}

export default App;
