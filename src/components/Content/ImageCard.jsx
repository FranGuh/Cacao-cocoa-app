import React from 'react';

const ImageCard = ({ logo, text, heightImg }) => {
  return (
      <div>
        <img src={logo} alt='Cacao.Cocoa' height={heightImg}/>
        <div className='card-content'>
          <p>{text}</p>
        </div>
      </div>
  )
}

export default ImageCard;