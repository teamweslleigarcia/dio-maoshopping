import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { ProdutoModel } from '../../Models/ProdutoModel'
import './card.scss'


const Card : FunctionComponent <ProdutoModel> = ({id, nome, descricao, preco, urlImagem}:ProdutoModel) => {
  return (
    <div className="card">
        <Link   to={id}>
        
            <div className="card-header">
                <img src={urlImagem} alt="Tênis Adidas" />
            </div>
            <div className="card-body">
                <h3 className="card-title">{nome}</h3>
                <p className="card-description">{descricao}</p>
            </div>
            <div className="card-footer">
                <span className='card-price'><small>R$</small>{preco}</span>
                <span className='card-price-parcela'><small>em</small>10x de 9,99 sem juros</span>
            </div>
        
        </Link>
    </div>
  )
}

export default Card