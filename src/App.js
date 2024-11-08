import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)

  if(count%2==0)
  {
    document.body.style = 'background: #2a2a2a';

  }
  else{
    document.body.style = 'background: #ffffaa';
  }
  return (
    <div class="container">

      {/* <h1>Count: {count}</h1> */}
      <div className="center">
        <button className="btn_day" onClick={() => setCount(count + 1)}>Day Light</button>
        <button className="btn_night" onClick={() => setCount(count - 1)}>Night Mode</button>
      </div>

    </div>
  );
}

export default App;
