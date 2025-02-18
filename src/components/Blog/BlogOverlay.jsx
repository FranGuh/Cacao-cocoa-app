import React from "react";

const BlogOverlay = ({ title, onClick }) => {
  return (
    <div className="detail-panel_cards2">
      <p>Más sobre {title}...</p>
      <button onClick={onClick} className="mt-2">
        Ver más
      </button>
    </div>
  );
};


const ImageCard = ({ title, onClick }) => {
  return (
    <div className="card-container relative w-full h-full">
      {/* <img src="your-image.jpg" alt={title} className="w-full h-full object-cover" /> */}
      <BlogOverlay title={title} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
