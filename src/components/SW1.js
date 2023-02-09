import React, { useEffect, useState } from "react";

export default function SW1() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [IsActive, setIsActive] = useState(true);

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  useEffect(() => {
    let interval = null;

    if (IsActive == false) {
      interval = setInterval(() => {
        setNow(Date.now());
      }, 10);

      console.log(interval);
    }

    return () => {
      console.log("start clicked");
      clearInterval(interval);
    };
  }, [IsActive]);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    setIsActive(false);
  };

  const handleStop = () => {
    setIsActive(true);
  };
  return (
    <div>
      <>
        <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </>
    </div>
  );
}
