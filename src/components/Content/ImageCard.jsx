import React from 'react';

const ImageCard = ({ logo, text, nameText, priceText, categoryText, heightImg, widthImg }) => {
  return (
    <div className='content-display'>
      <div className='card card-productFrame'>
        <img src={logo} alt='Cacao.Cocoa' height={heightImg} width={widthImg}/>
        <div className='card-content'>
          <p className='card-content__textName'>{nameText}</p>
          <p className='card-content__description'>{text}</p>
          <p className='card-content__price'>${priceText}</p>
          <p className='card-content__category'>{categoryText}</p>
          <button type="button" className="btn btn-outline-info"> Contact Us </button>
        </div>
      </div>
    </div>
      
  )
}

export default ImageCard;