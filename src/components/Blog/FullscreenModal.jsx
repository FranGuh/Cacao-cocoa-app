import React from "react";

const FullscreenModal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2">
      <div className="bg-white w-full h-full max-w-5xl max-h-[calc(100vh-20px)] p-6 rounded-lg shadow-lg overflow-y-auto relative">
        {/* Botón de cerrar */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-2xl mt-2"
        >
          ✖
        </button>

        {/* Contenido */}
        <div>{content}</div>

        {/* Botón de compartir */}
        <div className="absolute bottom-4 right-4">
          <button className="text-2xl">🔗</button>
        </div>
      </div>
    </div>
  );
};

export default FullscreenModal;
