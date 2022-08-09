import React, { useEffect, useState } from 'react'
import { ProdutoModel } from '../../Models/ProdutoModel'
import api from '../../services/http-common'
import './componentprodutoItem.scss'

type Props ={
  uuid : string 
}
const ComponentProductItem = ({uuid} : Props) =>{

  const [produto, setProduto] = useState<ProdutoModel>()

  useEffect(() => {
    api.get(`/produtos/${uuid}`)
       .then((response) => {
         setProduto(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  });

  return (
    <div className="produto-item">
      <div className='container'>
          <div className="produto-item-container">
            <div className='produto-item-img'>
              <img src={produto?.urlImagem} alt="" />
            </div>
            <div className='produto-item-info'>

              <div className='produto-item-title-produto'>
                <h3>{produto?.nome}</h3>
                <span>Código: <small>{produto?.cod}</small></span>
                <p>{produto?.descricao}</p>
              </div>

              <div className='produto-item-detalhe-info'>
                <div className='produto-item-price'>
                  <span><small>R$</small>{produto?.preco}</span>
                  <small>10X sem juros</small>
                </div>

                <div className='produto-item-botoes'>
                  {/*component add item*/}
                  <button className='btn btn-comprar'>Comprar Agora!</button>
                  <button className='btn btn-addToCart'>Adicionar no carrinho</button>
                </div>
              </div> 

              <div className='produto-item-frete'>
                <form action="">
                  <label htmlFor="frete" className="text-label">Calcular Frete: </label>
                  <input type="text" name="frete" id="frete" placeholder="Informe seu CEP aqui" />
                  <button>Calcular</button>
                </form>
              </div>
            </div>
          </div>
      </div>
    </div>
       
  )
  
}

export default ComponentProductItem