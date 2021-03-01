import React from 'react';
import StarRating from './StarRating.jsx';
import { FaTrash } from 'react-icons/fa';
import { useColors } from './useColors.jsx';

export default function Color({ id, title, color, rating }) {
    const { changeRating, removeColor } = useColors();

    return (
        <>
            <h3>{title}</h3>
            <FaTrash onClick={() => removeColor(id)}  />
            <div style={{backgroundColor: color, width: "200px", height: "100px"}} />
            <StarRating 
                selectedStars={rating} 
                onChangeRating={(newRating) => changeRating(newRating, id)}
            />
        </>
    )
}