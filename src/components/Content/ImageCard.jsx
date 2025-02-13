import React from 'react';

const ImageCard = ({ logo, text, heightImg, widthImg }) => {
  return (
    <div>
      <div className='card'>
        <img src={logo} alt='Cacao.Cocoa' height={heightImg} width={widthImg}/>
        <div className='card-content'>
          <p>{text}</p>
        </div>
      </div>
    </div>
      
  )
}

export default ImageCard;