import React, { useState } from "react";
import BlogOverlay from "./BlogOverlay";
import FullscreenModal from "./FullscreenModal";

// Importa cada imagen
import CacaoCocoa from '../../assets/imagenes/patterns/CacaoCocoa-51.png';
import Matcha from '../../assets/imagenes/patterns/Matcha.png';
import obscuro from '../../assets/imagenes/patterns/obscuro.png';

const BlogSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'La historia del cacao',
      image: CacaoCocoa,
      content: 'Este es un artículo sobre la historia del cacao...',
    },
    {
      id: 2,
      title: 'Beneficios del chocolate oscuro',
      image: Matcha,
      content: 'Aquí explicamos los beneficios del chocolate oscuro...',
    },
    {
      id: 3,
      title: 'Recetas fáciles con chocolate',
      image: obscuro,
      content: 'Descubre recetas sencillas para hacer con chocolate...',
    }
  ];

  return (
    <div className="blog-section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map(({ id, title, image, content }) => (
          <div 
            key={id} 
            className="card relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition duration-300" 
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Mostrar el título solo si NO está en hover */}
            {hoveredId !== id && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold text-center">{title}</h3>
              </div>
            )}

            {/* Mostrar el componente emergente cuando el mouse está encima */}
            {hoveredId === id && (
              <BlogOverlay title={title} onClick={() => setSelectedPost({ title, image, content })} />
            )}
          </div>
        ))}
      </div>

      {/* Renderizar el modal solo si hay un artículo seleccionado */}
      {selectedPost && (
        <FullscreenModal 
          isOpen={!!selectedPost} 
          onClose={() => setSelectedPost(null)} 
          content={
            <div>
              <h2 className="text-2xl font-bold">{selectedPost.title}</h2>
              <img src={selectedPost.image} alt={selectedPost.title} className="post-image" />
              <p className="mt-2">{selectedPost.content}</p>
            </div>
          }
        />
      )}
    </div>
  );
};

export default BlogSection;
