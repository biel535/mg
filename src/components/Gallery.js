import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [images] = useState([
    'https://raw.githubusercontent.com/biel535/mg/main/public/images/gabinet/gabinet1.jpg',
    'https://raw.githubusercontent.com/biel535/mg/main/public/images/gabinet/01.png',
    'https://raw.githubusercontent.com/biel535/mg/main/public/images/gabinet/02.jpg',
    
  ]);

  return (
    <div className="gallery">
      {images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index + 1}`} className="gallery-image" />
      ))}
    </div>
  );
};

export default Gallery;