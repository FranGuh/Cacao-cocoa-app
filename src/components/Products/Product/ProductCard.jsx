import { useEffect, useState} from 'react';
import { ImageCard } from '../../index';

const ProductCard = () => {
  const [products, setProducts] = useState([]);

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
        
    
      return () => { isMounted = false; };  // Cleanup para evitar actualizaciones en componentes desmontados
    }, []);
  return (
    <div className='content-display'>
      {products.length > 0 ? (
            products.map((product) => (
              <ImageCard  
                key={product.id}
                logo={`/Imagenes/productos/${product.image_path}`}
                text={product.description}
                heightImg="300px"
                nameText={product.name}
                categoryText={product.category}
                priceText={`${product.price}`}
                // onClick={() => setSelectedProduct(product)} // <-- Captura el clic
              />
            ))
          ) : (
            <p>Cargando productos...</p>
          )}
    </div>
  )
}

export default ProductCard
