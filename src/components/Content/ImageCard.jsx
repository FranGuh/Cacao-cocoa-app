import React from 'react';

// Este modulo sirve para importar productos, blog de notas y recibe esos parametros
const ImageCard = ({ logo, text, nameText, priceText, categoryText, heightImg, widthImg, onClick }) => {
  return (
    <div className='content-display'>
      <div className='card card-productFrame' onClick={onClick} style={{ cursor: 'pointer' }}>
        <img src={logo} alt={nameText} height={heightImg} width={widthImg} />
        <div className='card-content'>
          <p className='card-content__textName'>{nameText}</p>
          <p className='card-content__description'>{text}</p>
          <p className='card-content__price'>{priceText}</p>
          <p className='card-content__category'>{categoryText}</p>
          {/* <button type="button" className="btn btn-outline-info"> Contact Us </button> */}
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
