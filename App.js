import React from 'react';
import GoogleSlide from './GoogleSlide';
import PomodoroTimer from './PomodoroTimer';

const App = () => {
  return (
    <div>
      <h1>Digital Notice Board</h1>
      <GoogleSlide />
      <PomodoroTimer />
      {/* Add more widgets here */}
    </div>
  );
};

export default App;