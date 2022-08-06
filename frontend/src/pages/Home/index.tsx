import React from 'react'
import Card from '../../components/CardProduto';
import Navbar from '../../components/Navbar';
import SearchProduct from '../../components/SearchProduct';
import TitleSection from '../../components/TitleSection';
import { ProdutoService } from '../../services/produtoService'
import './home.scss'
  
  const produtoService = new ProdutoService()
  const produto = produtoService.getProduto()
  const produtos = produtoService.getAllProdutos()

const  Home = () => {
  console.log(produtos) 
    return (      
      <div className = 'home'>
        <Navbar />
        <SearchProduct />
        <div className='container'>
          <TitleSection titulo = "Ofertas" />
          <Card 
            id={produto.id}
            nome={produto.nome}
            descricao={produto.descricao}
            preco={produto.preco}
            urlImagem={produto.urlImagem}
           />
        </div>
      </div>
    );
  }

export default Home