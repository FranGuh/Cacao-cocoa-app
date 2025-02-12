import React from 'react';
import { Navbar, ImageCard, BlogCard } from './components';
import './App.css';
import product from './assets/Imagenes/cacao-product.png'

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <p>Contenido</p>
        
        <div className='content-display'>
          <BlogCard 
            text="Chocolates PREMIUM y libres de GLUTEN"
            autor="cacao.cocoa"
            source="@cacao.cocoa_with_cause"
          />
          <BlogCard 
            text="Chocolates PREMIUM y libres de GLUTEN"
            autor="cacao.cocoa"
            source="@cacao.cocoa_with_cause"
          />
          <BlogCard 
            text="Chocolates PREMIUM y libres de GLUTEN"
            autor="cacao.cocoa"
            source="@cacao.cocoa_with_cause"
          />
        </div>
        <p>
          
        </p>

        <div className='content-display__picture'>
          <ImageCard 
            logo={product}
            text="Fresco y delicioso cacao"
            heightImg="300px"
          />
          <ImageCard 
          logo={product}
          text="Fresco y delicioso cacao"
          heightImg="300px"
          />
          <ImageCard 
          logo={product}
          text="Fresco y delicioso cacao"
          heightImg="300px"
          />
        </div>
        
      </div>
    </div>
  )
}

export default App;
