import { useEffect, useState } from 'react';
import { ImageCard } from '../../index';

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para producto seleccionado

  useEffect(() => {
    let isMounted = true;
    fetch('http://localhost:5000/api/products')
      .then(response => {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        return response.json();
      })
      .then(data => {
        if (isMounted) setProducts(data);
      })
      .catch(error => console.error('Error al obtener productos:', error));

    return () => { isMounted = false; }; // Cleanup para evitar fugas de memoria
  }, []);

  return (
    <div className='content-display'>
      {products.length > 0 ? (
        products.map((product) => (
          <ImageCard  
            key={product.id}
            logo={`/Imagenes/productos/${product.image_path}`}
            heightImg="300px"
            nameText={product.name}
            // categoryText={product.category}
            // text={product.description}
            // priceText={`$${product.price}`}
            onClick={() => setSelectedProduct(product)} 
          />
        ))
      ) : (
        <p>Cargando productos...</p>
      )}

      {/* Panel de detalles */}
      {selectedProduct && (
        <div className="detail-panel">
          <h2 className='card-content__textName'>{selectedProduct.name}</h2>
          <img src={`/Imagenes/productos/${selectedProduct.image_path}`} alt={selectedProduct.name}/>
          <p className='card-content__description'>{selectedProduct.description}</p>
          <p className='card-content__category'>Categoría: {selectedProduct.category}</p>
          <p className='card-content__price'>Precio: ${selectedProduct.price}</p>
          <button onClick={() => setSelectedProduct(null)}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
