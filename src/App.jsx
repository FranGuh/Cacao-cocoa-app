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
        <BlogCard 
          text="Chocolates PREMIUM y libres de GLUTEN"
          autor="cacao.cocoa"
          source="@cacao.cocoa_with_cause"
        />
        <p>
          
        </p>
        <ImageCard 
          logo={product}
          text="Fresco y delicioso cacao" 
        />
        <ImageCard 
          logo={product}
          text="Fresco y delicioso cacao" 
        />
      </div>
    </div>
  )
}

export default App;
