import React, { useState } from 'react';
import Star from './Star.jsx';

export default function StarRating({ totalStars = 5, selectedStars = 0, onChangeRating = f => f }) {
    return (
        <>
        {[...Array(totalStars)].map((n, i) =>
            <Star
                key={i}
                selected={selectedStars > i}
                onSelect={() => onChangeRating(i + 1)}
            />
        )}
        <p>{selectedStars} of {totalStars} stars</p>
        </>
    );
}