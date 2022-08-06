import React from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './cart.scss'

const Cart = () => {
  return (
    <div className='carrinho'>
      <Link to='meu-carrinho'>
        <RiShoppingCartLine size={32}/>
        <span>0</span>
      </Link>
    </div>
  )
}

export default Cart