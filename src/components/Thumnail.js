import React from 'react';

const Thumbnail = ({ src, onClick, isActive}) => {
    const style = {
        width: '100px',
        height: '100px',
        border: isActive ? '3px solid blue' : '1px solid gray',
        objectFit: 'cover',
    };
    return (
        <img src={src} style={style} onClick={onClick} alt="thumbnail" />
    )
}

export default Thumbnail;