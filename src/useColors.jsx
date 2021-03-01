import React, { useState, createContext, useContext } from 'react';
import ColorData from './color-data.json';
import { v4 } from 'uuid';

const ColorContext = createContext();

export const useColors = () => useContext(ColorContext);

export function ColorProvider({ children }) {
    let [colors, setColors] = useState(ColorData);

    const addColor = (title, color) => setColors(
        [
            ...colors,
            {title, color, id: v4(), rating: 0}
        ]);

    const removeColor = (id) => setColors(
        colors.filter(color => color.id !== id));

    const changeRating = (newRating, id) => setColors(
        colors.map(
            color => color.id === id ? 
            {
                ...color,
                rating: newRating
            } : 
            color));

    return (
        <ColorContext.Provider value={{colors, addColor, removeColor, changeRating}}>
            {children}
        </ColorContext.Provider>
    );
}

