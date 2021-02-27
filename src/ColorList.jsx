import React from 'react';
import Color from './Color.jsx';

export default function ColorList({ colors, onChangeRating = (f, x) => f, onRemoveColor = f => f }) {
    return colors.map((color, i) =>
            <Color key={i} {...color} onChangeRating={onChangeRating} onRemove={(onRemoveColor)} />
        );
}