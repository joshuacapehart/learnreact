import React from 'react';
import Color from './Color.jsx';
import AddColorForm from './AddColorForm.jsx';

export default function ColorList({ colors, onChangeRating = (f, x) => f, onRemoveColor = f => f, onAddColor = f => f }) {
    return (
        <>
            <AddColorForm onAddColor={onAddColor} />
            {colors.map((color, i) =>
                <Color key={i} {...color} onChangeRating={onChangeRating} onRemove={(onRemoveColor)} />
            )}
        </>
    );
}