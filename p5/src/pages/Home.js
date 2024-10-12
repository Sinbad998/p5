import picture from '../assets/assetsHome.png'
import DefaultPicture from '../assets/compoHome.png'
import React from 'react'

  function ImageCard({ src, alt }) {
    return (
      <div>
        <img src={src} alt={alt} />
      </div>
    );
  }
  
  function Home() {
    const images = Array(6).fill(DefaultPicture); 
  
    return (
      <div>
        <img src={picture} alt="Montagnes avec titre de page" />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap:'5em' }}>
          {images.map((image, index) => (
            <ImageCard key={index} src={image} alt="Card de navigation" />
          ))}
        </div>
      </div>
    );
  }
  
  export default Home;
  