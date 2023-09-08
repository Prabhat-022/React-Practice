// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

import './style.css';

export default function Solution() {
    const [state, setState] = useState();

    useEffect()
    return (
        <div className="container">
            <h2 style={{ textAlign: 'center' }}>Moonshotx Filters</h2>
            <div className="buttons-container">
                <button>Bags</button>
                <button>Watches</button>
                <button>Sports</button>
                <button>Sunglasses</button>
            </div>
        </div>


    );
}
