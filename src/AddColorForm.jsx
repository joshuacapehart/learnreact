import React, { useState } from 'react';
import { useColors } from './useColors.jsx';

export default function AddColorForm() {
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");
    const { addColor } = useColors();

    const submit = (e) => {
        e.preventDefault();

        addColor(title, color);

        setTitle("");
        setColor("#000000");
    }

    return (
        <form onSubmit={submit}>
            <input 
                type="text" 
                onChange={e => setTitle(e.target.value)}
                value={title}
                placeholder="color title..."
                required={true}
            />
            <input
                type="color"
                onChange={e => setColor(e.target.value)}
                value={color}
                placeholder="...color"
                required={true}
            />
            <button>ADD</button>
        </form>
    );
}