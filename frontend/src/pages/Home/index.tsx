import React from 'react'
import TitleSection from '../../components/TitleSection';
import Products from '../../components/Products';

import './home.scss'
import Navbar from '../../components/Navbar';

function  Home() {
   
  return (
    <>
      <Navbar />
      <div className='container'>
        <section>
          <TitleSection titulo = "Ofertas" />
          <Products />
        </section>
      </div>
    </>
    
  );
}

export default Home