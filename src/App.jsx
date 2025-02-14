import { React } from 'react';
import { Navbar, BlogCard, VideoCard, TextContainer, ProductCard, FooterBar } from './components';
import './App.css';
import videoCocoa from './assets/video/video_cacao.mp4';


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
        <div className='content-display__picture content-pattern-background'>
          <ProductCard />
        </div>
      </div>
      <FooterBar />
    </div>
  )
}

export default App;
