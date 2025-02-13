import React from 'react';
import { Navbar, ImageCard, BlogCard, VideoCard, TextContainer, FooterBar } from './components';
import './App.css';
import product from './assets/Imagenes/cacao-product.png'
import videoCocoa from './assets/video/video_cacao.mp4'

const App = () => {
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
        <p>
        <div>
          <TextContainer 
            text="Productos Gluten Free!"
          />
        </div>
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
      <FooterBar />
    </div>
  )
}

export default App;
