import React from 'react'
import { Link } from 'react-router-dom'
import './card.scss'
const Card = () => {
  return (
    <div className="card">
        <Link   to="htpps://">
        
            <div className="card-header">
                <img src="https://github.com/teamweslleigarcia/dio-maoshopping/blob/main/produtos/esportivos/T%C3%AAnis%20Adidas%20Runfalcon%202.0%20Masculino-NQQ-4635-205.jpg?raw=true" alt="Tênis Adidas" />
            </div>
            <div className="card-body">
                <h3 className="card-title">Tênis Adidas Runfalcon 2.0 Masculino</h3>
                <p className="card-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card-footer">
                <span className='card-price'><small>R$</small>100,00</span>
                <span className='card-price-parcela'><small>em</small>10x de 9,99 sem juros</span>
            </div>
        
        </Link>
    </div>
  )
}

export default Card