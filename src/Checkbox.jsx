import React, { useState, useEffect } from 'react';

export default function Checkbox() {
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(true);

    useEffect(() => {
        console.log("Mounted");
        return () => console.log("Unmounted");
    }, []);

    return (
        <>
            <input 
                type="checkbox"
                value={checked}
                onChange={() => setChecked(!checked)}
            />
            <br />
            <input 
                type="checkbox"
                value={checked2}
                onChange={() => setChecked2(!checked2)}
            />
            <p>
                {checked ? "checked" : "not checked"}
            </p>
        </>
    );
}