import React from 'react';

const Display = ({ image}) => (
    <div style={{
        border: '2px solid black', padding: '10px', marginBottom: '20px'
    }}>
        <img src={image} alt='my images' style={{ width: '100%', maxHeight: '500px', objectFit: 'contain'}} />

    </div>
)

export default Display;