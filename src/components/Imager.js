import React, { useState } from 'react';
import Display from './Display';
import Thumbnail from './Thumbnail';

const Imager = () => {
    const images = [
        'images/photo1.jpg',
        'images/photo2.jpg',
        'images/photo3.jpg',
        'images/photo4.jpg',
        'images/photo5.jpg',
        'images/photo6.jpg',
        'images/photo7.png',
        'images/photo8.jpg',
        'images/photo9.jpg',
        'images/photo10.jpg',
        'images/photo11.png',
        'images/photo12.png'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

const handleRandom = () => {
    const rando = Math.floor(Math.random() * images.length);
    setCurrentIndex(rando);
}

const handlePrev  = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))
}

const handleNext  = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))
}
const handleThumbnailClick  = (index) => {
    setCurrentIndex(index);
}

return(
    <div style={{
            maxWidth: "800px", 
            margin: "0 auto",
            textAlign: "center",
            fontFamily: "Arial"
    }}>
        <h2>Lareciyo's Imager</h2>

{/* main image */}
<Display image={images[currentIndex]} />
        
        {/* tha buttons */}
        <div style={{ margin: "10px 0" }}>
<button onClick={handleRandom}>Random</button>
<button onClick={handlePrev} style={{ marginLeft: "10px" }}>{"<"}</button>
<button onClick={handleNext} style={{ marginLeft: "10px"}}>{">"}</button>
        </div>
        {/* my thumbnails grid */}
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
            marginTop: "20px"
        }}>
{images.map((img, index) => (
    <Thumbnail 
    key={index}
    src={img}
    onClick={() => handleThumbnailClick(index)}
    isActive={index === currentIndex}
    />
))}
        </div>
      </div>
)
}
export default Imager