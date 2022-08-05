import './App.css';
import './style.css';
import MediaQuery from "react-responsive";
import React, { useRef, useState } from "react";

// images
import background from './images/mountain.jpg';
import climb1 from './images/climb1.jpg'
import climb2 from './images/climb2.jpg'
import climb3 from './images/climb3.jpg'

//components
import Navbar from './components/Navbar';
import ImageBlock from './components/ImageBlock';

const IMAGE_BLOCK_CONTENT = [
  { headerText:'Mountain ski tours', bodyText:'Ditch the park and explore the alps with our experienced ski guides', image:climb1},
  { headerText:'Peak tours', bodyText:'Test your limits and experience the thrill of conquering a summit', image:climb2},
  { headerText:'Team building', bodyText:'Build trust in your team working together in high pressure scenarios', image:climb3},
]

function App() {
  const imageBlockContent = IMAGE_BLOCK_CONTENT?.map((content) => (
    <ImageBlock headerText={content.headerText} bodyText={content.bodyText} image={content.image} />
  ));

  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  function extendNav(isNavbarExpanded) {
    setIsNavbarExpanded(true)
  }
  const fullPage = (
    <div className='bg-container'>
      <Navbar extendNav={extendNav}/>
      <section className='section-1' style={{
          backgroundImage: `url(${background})`,
          width: 100+'%',
          heigth: 100+'%',
          backgroundSize: 'cover',
          overflow: 'hidden',
          
        }}
      >
        <div className='background'></div>
        <div className='section-1-overlay' >
          <div className='section-1-overlay-text'>
            <span style={{fontWeight: 300}}>Peaked?</span>
            <span>Find a new mountain.</span>
          </div>
          <div className='search-bar'>
            <input></input> <button>SEARCH</button>
          </div>
          
        </div>
      </section>
      <section className='section-2'>
          {imageBlockContent}
      </section>
    </div>
  )
  const navOnly = (
    <div className='bg-container'>
      <Navbar extendNav={extendNav}/>
    </div>
    )
  
  return (
    <div>
      {isNavbarExpanded ? navOnly : fullPage}
    </div>
  );
}

export default App;
