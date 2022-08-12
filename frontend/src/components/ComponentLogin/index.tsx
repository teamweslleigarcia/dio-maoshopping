import React from 'react'
import {BsGoogle, BsApple, BsInstagram, BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../../images/banner-logo-diomao.png'
import './componenetlogin.scss'
const LoginComponent = () => {
  return (
    <div className="login-container">
        <div className="login">
            <div className="login-title">
                <img src={logo} alt=""/>
                <span>LOGIN</span>
            </div>
            <div className="login-form">
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="seu email aqui" />

                    <label htmlFor="senha">Senha:</label>
                    <input type="password" name="password" id="password"  placeholder="insisra sua senha" />

                    <button>Entrar</button>
                </form>
            </div>
            <div className="login--novo-cadastro">
                <span>Ainda nao tem conta?</span>
                <Link to="/register">
                    Criar conta agora!
                </Link>
            </div>
            <div className="login-footer">
                <div className="login-footer--com">
                    <span><small>OU</small></span>
                </div>
                <div className="login-footer--redes-socias">
                    <button><BsGoogle /></button>
                    <button><BsApple /></button>
                    <button><FaFacebookF /></button>
                    <button><BsInstagram /></button>
                    <button><BsTwitter /></button>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default LoginComponent