import React, { useState } from 'react';
import './App.css';
import ColorList from './ColorList.jsx';
import { ColorProvider } from './useColors.jsx';
import Checkbox from './Checkbox.jsx';

function App() {
  let [isCheckboxVisible, setCheckboxVisible] = useState(true);
  return (
    <ColorProvider>
      <input
        type="checkbox"
        value="Checkbox visible"
        value={isCheckboxVisible}
        onChange={() => setCheckboxVisible(!isCheckboxVisible)}
      />
      <br />
      <br />
      {isCheckboxVisible ? <Checkbox /> : ''}
      <ColorList />
    </ColorProvider>
  );
}

export default App;
