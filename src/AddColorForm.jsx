import React, { useState } from 'react';

export default function AddColorForm({ onAddColor = f => f }) {
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");

    const submit = (e) => {
        e.preventDefault();

        onAddColor(title, color);

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
                require
            />
            <input
                type="color"
                onChange={e => setColor(e.target.value)}
                value={color}
                placeholder="...color"
                required
            />
            <button>ADD</button>
        </form>
    );
}