import React from 'react'
import './meucarrinho.scss'

const MeuCarrinho = () => {
  return (
    <div className="container-carrinho">

      <div className="items-carrinho">
        <div className="items-carrinho--table">
          <table>
            <th>
              <td>Produtos</td>
              <td>Preço Unitário</td>
              <td>Quantidade</td>
              <td>SubTotal</td>
              <td></td>
            </th>
            <tr>
              <td><img src="" alt="" width={50} height={50} /></td>
              <td>R$ 0,00</td>
              <td>{/*<AddToCart />*/}</td>
              <td>R$ 0,00</td>
              <td className='remove-item-to-cart'>x</td>
            </tr>
          </table>
        </div>
        <div className="desconto">
          <span>Informe o código de Desconto</span>
          <div className="desconto-button">
            <input type="text" />
            <button>Inserir</button>
          </div>
        </div>
      </div>


      <div className="resumo-pedido">
        <div className="resumo-pedido--title">
          <span>Resumo do Pedido</span>
          {/*<CalcularFrete />*/}
        </div>
        <div className="resumo-pedido--price">
          <div className="resumo-pedido--top">
            <div className="price--subtotal">
              <span>SubTotal:</span>
              <span>R$ 0,00</span>
            </div>
            <div className="price--frete">
              <span>Frete:</span>
              <span>R$ 0,00</span>
            </div>
          </div>
          <div className="resumo-pedido--bottom">
            <div className="price--desconto">
              <span>Desconto:</span>
              <span>R$ 0,00</span>
            </div>
            <div className="price--total">
              <span>Total:</span>
              <span>R$ 0,00</span>
            </div>
            <div className="button-comprar">
              <button>Comprar Agora!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeuCarrinho