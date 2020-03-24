import React, { useState } from 'react';
import Info from './Info';

const App = () => {
  const [visible, setVisible] = useState(false);
  const onToggle = () => {
    setVisible(!visible)
  }
  
  return (
    <div>
      <button onClick={onToggle}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;