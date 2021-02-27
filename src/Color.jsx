import React from 'react';
import StarRating from './StarRating.jsx';
import { FaTrash } from 'react-icons/fa';

export default function Color({ id, title, color, rating, onChangeRating = (f, x) => f, onRemove = f => f }) {
    return (
        <>
            <h3>{title}</h3>
            <FaTrash onClick={() => onRemove(id)}  />
            <div style={{backgroundColor: color, width: "200px", height: "100px"}} />
            <StarRating 
                selectedStars={rating} 
                onChangeRating={(newRating) => onChangeRating(newRating, id)}
            />
        </>
    )
}