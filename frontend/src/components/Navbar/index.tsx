import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Cart from '../Cart';
import './navbar.scss'
const Navbar = () => {
  return (
    <nav>
        <div className='navbar'>
            <div className='navbar-left'>
                <BsWhatsapp size={32} />
                <span>Compre pelo WhatsApp</span>
                <a href="http://wa.me/5592993805887" target="blank">(92) 99380-5887</a>
            </div>
            <div className='navbar-right'>
                <div className='meus-pedidos'>
                    <Link to= "/meus-pedidos">
                        Meus Pedidos
                    </Link>
                    <Cart />
                </div>
                <div className='navbar-login'>
                    <div className='navbar-login--user'>
                        <img src="" alt="" />
                    </div>
                    <div className='navbar-login--name'>
                        <span>Usuário</span>
                        <small>
                            <Link to= "/login">Entre</Link> Ou
                            <Link to= "/register">Cadastre-se</Link>
                        </small>

                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar