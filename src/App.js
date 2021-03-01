import React from 'react';
import './App.css';
import ColorList from './ColorList.jsx';
import { ColorProvider } from './useColors.jsx';

function App() {
  return (
    <ColorProvider>
      <ColorList />
    </ColorProvider>
  );
}

export default App;
