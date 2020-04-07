import React, { useState } from 'react';

export const AddReservation = () => {
    const [text, setText] = useState('');

    return (
        <>
            <h3>Add new reservation</h3>
            <form>
                <div>
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div>
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." />
                </div>
                <button>Add reservation</button>
            </form>
        </>
    )
}

export default AddReservation;