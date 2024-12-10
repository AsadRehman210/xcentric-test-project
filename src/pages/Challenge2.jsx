import React, { useEffect, useRef, useState } from 'react'
import "../assets/styles/CounterDown.css"

const Challenge2 = () => {
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [timeLeft, setTimeLeft] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning && timeLeft > 0) {
      setIsRunning(true);
      setIsTimeUp(false);
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            setIsTimeUp(true);
            return 0; 
          }
          return prevTime - 1; 
        });
      }, 1000);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setIsTimeUp(false);
    setMinutes("");
    setSeconds("");
    setTimeLeft(0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "minutes") {
      setMinutes(value.replace(/\D/, ""));
    } else if (name === "seconds") {
      setSeconds(value.replace(/\D/, ""));
    }
  };

  const setTimer = () => {
    const totalSeconds =
      (parseInt(minutes || "0") * 60 + parseInt(seconds || "0")) || 0;
    setTimeLeft(totalSeconds);
    setIsTimeUp(false); 
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); 
  }, []);

  const formatTime = () => {
    const mins = Math.floor(timeLeft / 60).toString().padStart(2, "0");
    const secs = (timeLeft % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <main className={`timer-container ${isTimeUp ? "flashback" : ""}`}>
      <h1>Countdown Timer</h1>
      <div className="inputs">
        <input
          type="text"
          name="minutes"
          placeholder="Mint"
          value={minutes}
          onChange={handleInputChange}
          disabled={isRunning}
        />
        <span>:</span>
        <input
          type="text"
          name="seconds"
          placeholder="Sec"
          value={seconds}
          onChange={handleInputChange}
          disabled={isRunning}
        />
        <button onClick={setTimer} disabled={isRunning || timeLeft > 0}>
          Set Timer
        </button>
      </div>
      <div className="countdown-display">
        <h2>{timeLeft > 0 ? formatTime() : "00:00"}</h2>
      </div>
      <div className="controls">
        <button onClick={startTimer} disabled={isRunning || timeLeft <= 0}>
          Start
        </button>
        <button onClick={resetTimer} disabled={isRunning && !isTimeUp}>
          Reset
        </button>
      </div>
    </main>
  );
};


export default Challenge2
