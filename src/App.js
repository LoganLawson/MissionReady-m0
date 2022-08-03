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

function App() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  function extendNav(isNavbarExpanded) {
    setIsNavbarExpanded(isNavbarExpanded)
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
        <div className='section-1-overlay' >
          <div className='section-1-overlay-text'>
            <h1>Lorem Ipsum <br></br> dolor sit amet</h1>
          </div>
          <div className='search-bar'>
            <input></input> <button>SEARCH</button>
          </div>
          
        </div>
      </section>
      <section className='section-2'>
        <ImageBlock imageSource={climb1}/>
        <ImageBlock imageSource={climb2}/>
        <ImageBlock imageSource={climb3}/>
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
