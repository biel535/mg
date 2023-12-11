import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [images] = useState([
    process.env.PUBLIC_URL + '/images/gabinet/gabinet1.jpg',
    process.env.PUBLIC_URL + '/images/gabinet/01.png',
    process.env.PUBLIC_URL + '/images/gabinet/02.jpg',
    
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