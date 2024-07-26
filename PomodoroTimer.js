import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h2>Pomodoro Timer</h2>
      <div>{formatTime(time)}</div>
      <button onClick={() => setRunning(!running)}>
        {running ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => setTime(25 * 60)}>Reset</button>
    </div>
  );
};

export default PomodoroTimer;
