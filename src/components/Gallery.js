import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [images] = useState([
    '/images/gabinet/gabinet1.jpg',
    '/images/gabinet/01.png',
    '/images/gabinet/02.jpg',
    
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