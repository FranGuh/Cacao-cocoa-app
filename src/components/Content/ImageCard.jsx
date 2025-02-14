import React from 'react';

const ImageCard = ({ logo, text, nameText, priceText, categoryText, heightImg, widthImg }) => {
  return (
    <div className='content-display'>
      <div className='card'>
        <img src={logo} alt='Cacao.Cocoa' height={heightImg} width={widthImg}/>
        <div className='card-content'>
          <p>{text}</p>
          <p>{nameText}</p>
          <p>${priceText}</p>
          <p>{categoryText}</p>
          <button type="button" className="btn btn-outline-info"> Contact Us </button>
        </div>
      </div>
    </div>
      
  )
}

export default ImageCard;