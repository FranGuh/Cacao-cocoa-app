import { useState } from 'react';
import '/src/assets/bootstrap.min.css';
import { Navbar, BlogCard, VideoCard, TextContainer, ProductCard, FooterBar, ImageCard } from './components';
import './App.css';
import videoCocoa from './assets/video/video_cacao.mp4';
import { BlogSection } from './components';
import videoChocolate from './assets/video/chocolate.mp4';


const App = () => {
  const [seccionActiva, setSeccionActiva] = useState('inicio');
  
  return (
    <div>
        <Navbar setSeccionActiva={setSeccionActiva} seccionActiva={seccionActiva}/>
      <div>

        {seccionActiva === 'inicio' && (
        <section id="inicio">
          <TextContainer 
              text="Productos Gluten Free!"
            />
          <div className='video-container'>
            <div className='content-display__video'>
              <VideoCard 
                videoSource={videoCocoa}
              />
              <div className='video-text-overlay'>
                <h2>Cacao.cocoa</h2>
                <p>Un chocolate, una sensación</p>
              </div>
            </div>
          </div>
          
          <div className='content-pattern-background'>
            <div className='content-display'>
              <BlogCard 
                text="Chocolates PREMIUM y libres de GLUTEN"
                autor="cacao.cocoa"
                source="@cacao.cocoa_with_cause"
              />
              <BlogCard 
                text="Pasión al alcance de un bocadillo sano"
                autor="cacao.cocoa2"
                source="@cacao.cocoa_with_cause"
              />
              <BlogCard 
                text="Para el paladar más exigente"
                autor="cacao.cocoa3"
                source="@cacao.cocoa_with_cause"
              />
            </div>

            <div>
              <TextContainer 
                text="Productos Gluten Free!"
              />
            </div>
            
            <div className=''>
              <ProductCard limite="3"/>
            </div>
          </div>

          
        </section>
        )}
        

        {seccionActiva === 'productos' && (
        <section id="productos">
          <div>
            <TextContainer 
              text="Productos Gluten Free!"
            />
          </div>
          
          <div className='content-pattern-background'>
            <ProductCard />
          </div>
        </section>
        )}
        


        {seccionActiva === 'newsletter' && (
        <section id="newsletter">
          <div>
            {/* A partir de aqui trabajen el blog */}
            <TextContainer 
              text="Newsletter"
            />
  
          <div className="background-div">
            <img 
            src="/Imagenes/productos/01.png" 
            alt="Producto 1" 
            style={{ width: '320px', borderRadius: '10px' }} 
            />
            <div className="text-container">
            <h1 className="elegant-title">Soy Carla Olivares</h1>
            <h2 className="elegant-subtitle">"Mama, esposa, emprendedora y sobreviviente."</h2>
            <p className="elegant-message">"Carla Olivares R. es una madre y esposa emprendedora
              que tras superar numerosas adversidades hoy se destaca como una vendedora sobreviviente."</p>
            </div>
          </div>
  
          <div className='content-pattern-background'>
            <BlogSection />
            <BlogSection />
            <BlogSection />  
          </div>                  
          </div>
        </section>
        )}


        {seccionActiva === 'motivarme' && (
          <section id="motivarme">
          <div className='content-pattern-background2'>
            <TextContainer 
              text="Motivate"
            />
            <div className='content-display__blog'>
              <ImageCard 
                nameText="Hecho a mano con amor"
                logo="/Imagenes/productos/3.jpeg"
              />
              <ImageCard 
                nameText="Te mereces un regalo…un dulce y delicioso chocolate "
                logo="/Imagenes/productos/2.jpeg"
              />
              <ImageCard 
                nameText="Todos merecemos un momento de placer, sin un momento de culpa"
                logo="/Imagenes/productos/4.jpeg"
              />
              <ImageCard 
                nameText="Chocolates que unen, no que excluyen"
                logo="/Imagenes/productos/5.jpeg"
              />
              <ImageCard 
                nameText="Nuestro chocolate es…El momento de golosina de calidad que te mereces"
                logo="/Imagenes/productos/6.jpeg"
              />
              <ImageCard 
                nameText="Complace tus pasiones"
                logo="/Imagenes/productos/6.jpeg"
              />
            </div>
          </div>

          
          <div className='content-display__video video-container'>
            <VideoCard
              videoSource={videoChocolate}
            />
            <div className='video-text-overlay'>
              <h2>El mejor chocolate</h2>
              <p>Disfruta de cada bocado</p>
            </div>
          </div>
        </section>
        )}
        
      </div>
      <FooterBar />
    </div>
  )
}

export default App;
