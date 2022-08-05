import React from 'react'
import './searchproduct.scss'
const SearchProduct = () => {
  return (
    
    <div className='container-search-product'>
      <div className='search-product'>
        <input className='search' type="search" placeholder="insira o nome do produto aqui"/>
        <a href="http://">Pesquisar</a>
      </div>
    </div>
  )
}

export default SearchProduct