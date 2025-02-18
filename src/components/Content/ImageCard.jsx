import React from 'react';

const ImageCard = ({ 
  logo, text, nameText, priceText, categoryText, heightImg, widthImg, onClick 
}) => {
  return (

  <div 
    className='card-productFrame relative' 
    onClick={onClick} 
    style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: '0' }}
  >
    {/* Imagen ampliada y ajustada */}
    <img 
      style={{ 
        borderRadius: '0', 
        width: '100%', 
        height: 'auto', 
        transform: 'scale(1.1)', 
        transition: 'transform 0.3s ease-in-out' 
      }} 
      src={logo} 
      alt={nameText} 
    />
    
    {/* Contenido del texto */}
    <div className="card-content p-4">
      {nameText && <p className='card-content__textName'>{nameText}</p>}
      {text && <p className='card-content__description'>{text}</p>}
      {priceText && <p className='card-content__price'>{priceText}</p>}
      {categoryText && <p className='card-content__category'>{categoryText}</p>}
    </div>
  </div>
  
  );
}

export default ImageCard;
