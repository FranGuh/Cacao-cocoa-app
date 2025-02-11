import React from 'react';

const ImageCard = ({ logo, text }) => {
  return (
    <div className='feed'>
      <div>
        <img src={logo} alt='Cacao.Cocoa' height="500px"/>
        <div className='card-content'>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default ImageCard;