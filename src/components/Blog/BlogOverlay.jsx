import React from "react";

const BlogOverlay = ({ title, onClick }) => {
  return (
    <div className="detail-panel absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white text-lg font-semibold p-4">
      <p>Más sobre {title}...</p>
      <button 
        onClick={onClick} 
        className="mt-2 bg-white text-black px-3 py-1 text-sm rounded shadow-md"
      >
        Ver más
      </button>
    </div>
  );
};

export default BlogOverlay;
