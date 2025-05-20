import React, { useState } from 'react';


function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <h1>Mouse Click Tracker</h1>
      <div
        className="click-area"
        onClick={handleClick}
      >
        <p>Click inside this box</p>
        <p>Click Count: {clickCount}</p>
      </div>
    </div>
  );
}

export default App;
