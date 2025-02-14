import { useEffect, useState } from 'react';
import { Navbar, ImageCard, BlogCard, VideoCard, TextContainer, FooterBar } from './components';
import './App.css';
import productImg from './assets/Imagenes/cacao-product.png';
import videoCocoa from './assets/video/video_cacao.mp4';


const App = () => {
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
    <div>
      <Navbar />
      <div>
        <div className='content-display__video'>
          <VideoCard 
            videoSource={videoCocoa}
            videoText=" Cacao.cocoa "
            videoText2=" Un chocolate, una sensación "
          />
        </div>
        <div className='content-display'>
          <BlogCard 
            text="Chocolates PREMIUM y libres de GLUTEN"
            autor="cacao.cocoa"
            source="@cacao.cocoa_with_cause"
          />
          <BlogCard 
            text="Chocolates libres de GLUTEN"
            autor="cacao.cocoa2"
            source="@cacao.cocoa_with_cause"
          />
          <BlogCard 
            text="Chocolates libres"
            autor="cacao.cocoa3"
            source="@cacao.cocoa_with_cause"
          />
        </div>
        <div>
          <TextContainer 
            text="Productos Gluten Free!"
          />
        </div>
        <div className='content-display__picture'>
          {products.length > 0 ? (
            products.map((product) => (
              <ImageCard  
                key={product.id}
                logo={productImg}
                text={product.description}
                heightImg="300px"
                nameText={product.name}
                categoryText={product.category}
                priceText={`${product.price}`}
              />
            ))
          ) : (
            <p>Cargando productos...</p> // Mensaje mientras se cargan los datos
          )}
        </div>
      </div>
      <FooterBar />
    </div>
  )
}

export default App;
