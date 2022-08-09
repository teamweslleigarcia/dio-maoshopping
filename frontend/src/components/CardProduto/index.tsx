import React from 'react'
import { Link } from 'react-router-dom'
import { ProdutoModel } from '../../Models/ProdutoModel'

import './card.scss'

type Props = {
    produto: ProdutoModel
}

const Card = ({produto}:Props) => {

    return(
        <div className="card">
            <Link to={`${produto.id}`}>
            
                <div className="card-header">
                    <img src={produto.urlImagem} alt={produto.nome} />
                </div>
                <div className="card-body">
                    <h3 className="card-title">{produto.nome}</h3>
                    <p className="card-description">{produto.descricao}</p>
                </div>
                <div className="card-footer">
                    <span className='card-price'><small>R$</small>{produto.preco}</span>
                    <span className='card-price-parcela'><small>em</small>10x de 9,99 sem juros</span>
                </div>
            
            </Link>
        </div>
    )

}

export default Card