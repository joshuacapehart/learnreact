import React, { useState } from 'react';
import './App.css';
import colorData from './color-data.json';
import ColorList from './ColorList.jsx';

function App() {
  const [colors, setColors] = useState(colorData);
  return <ColorList 
    colors={colors} 
    onChangeRating={(newRating, id) => 
      setColors(
        colors.map(color => color.id === id ? {...color, rating: newRating} : color))}
    onRemoveColor={(id) =>
      setColors(
        colors.filter(color => color.id !== id)
      )}
  />;
}

export default App;
