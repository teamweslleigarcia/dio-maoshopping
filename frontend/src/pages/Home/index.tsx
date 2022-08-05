import React from 'react'
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import SearchProduct from '../../components/SearchProduct';
import TitleSection from '../../components/TitleSection';
import './home.scss'

const  Home = () => {
    return (
      <div className = 'home'>
        <Navbar />
        <SearchProduct />
        <div className='container'>
          <TitleSection titulo = "Ofertas" />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }

export default Home