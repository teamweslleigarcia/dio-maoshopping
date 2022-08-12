import React, { useEffect, useState } from 'react'
//import { useSelector } from 'react-redux';
import { ProdutoModel } from '../../Models/ProdutoModel';
//import { getProductsSelector } from '../../Redux/slices/products.slice';
import api from '../../services/http-common';
import Card from '../CardProduto';
import './products.scss'

const Products = () => {

  //const products = useSelector(getProductsSelector)
  //tirar o useEffect para poder usar o selector

    const [produtos, setProdutos ]= useState<ProdutoModel[]>([])

    useEffect(() => {
      api.get("/produtos")
         .then((response) => {
           setProdutos(response.data)
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro : " + err);
        });
    }, []);

  return (
    <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
              <Card produto = {produto}
            />
            </li>
          ))}
    </ul>      
  )
}

export default Products