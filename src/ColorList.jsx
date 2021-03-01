import React from 'react';
import Color from './Color.jsx';
import AddColorForm from './AddColorForm.jsx';
import { useColors } from './useColors.jsx';

export default function ColorList() {
    const { colors } = useColors();

    return (
        <>
            <AddColorForm />
            {colors.map((color, i) =>
                <Color key={i} {...color} />
            )}
        </>
    );
}