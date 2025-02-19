import { useEffect, useState } from 'react';
import { ImageCard } from '../../index';

const ProductCard = ({ limite }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para producto seleccionado
  const [updatedPrice, setUpdatedPrice] = useState(null);
  const [selectedSize, setSelectedSize] = useState('normal');

  useEffect(() => {
    let isMounted = true;
    fetch('http://localhost:5000/api/products')
      .then(response => {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        return response.json();
      })
      .then(data => {
        if (isMounted) {
          setProducts(limite ? data.slice(0, limite) : data); 
        }
      })
      .catch(error => console.error('Error al obtener productos:', error));

    return () => { isMounted = false; }; // Cleanup para evitar fugas de memoria
  }, [limite]);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setUpdatedPrice(product.price); // Inicializa con precio original
    setSelectedSize('normal'); 
  };

  const sizeOptions = {
    normal: 1,
    grande: 1.5,
    caja: 12
  };


  return (
    <div className='content-display'>
      {products.length > 0 ? (
        products.map((product) => (
          <ImageCard  
            key={product.id}
            logo={`/Imagenes/productos/${product.image_path}`}
            heightImg="300px"
            nameText={product.name}
            onClick={() => handleSelectProduct(product)}
          />
        ))
      ) : (
        <p>Cargando productos...</p>
      )}

      {selectedProduct && Number (limite) !== 3 && (
        <div className="detail-panel_product">
          <div className="product-info" style={{ overflow: 'hidden', borderRadius: '0' }}>
            <div className="product-image">
              <img 
                src={`/Imagenes/productos/${selectedProduct.image_path}`} 
                alt={selectedProduct.name} 
                
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  transform: 'scale(1.2)', 
                  transition: 'transform 0.3s ease-in-out', 
                  borderRadius: '0', 
                  objectFit: 'cover', 
                  border: 'none'  
                }} 
              />
            </div>
            <div className="details">
              <h2 className="product-name">{selectedProduct.name}</h2>
              <p className="product-description">{selectedProduct.description}</p>
              <p className="product-category">Categoría: {selectedProduct.category}</p>

              {/* Tamaños */}
              <div className="size-selector">
                <div className="size-buttons">
                  <p>Tamaños</p>
                  {Object.entries(sizeOptions).map(([size, multiplier]) => (
                    <button 
                      key={size} 
                      onClick={() => { 
                        setUpdatedPrice(selectedProduct.price * multiplier); 
                        setSelectedSize(size); 
                      }}
                      className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                      disabled={selectedSize === size} 
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <p className="product-price">Precio: ${updatedPrice.toFixed(2)}</p>

              <button className="close-button" onClick={() => setSelectedProduct(null)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductCard;
