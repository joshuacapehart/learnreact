import React, { useState } from 'react';
import './App.css';
import colorData from './color-data.json';
import ColorList from './ColorList.jsx';
import { v4 } from 'uuid';

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
    onAddColor={(title, color) => setColors([...colors, {title, color, id: v4(), rating: 0}])
    }
  />;
}

export default App;
