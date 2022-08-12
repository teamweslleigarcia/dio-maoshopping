import React from 'react'
import { BsApple, BsGoogle, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import logo from '../../images/banner-logo-diomao.png'

import './register.scss'

const Register = () => {
  return (
    <div className="register-container">
      <div className="register">
        <div className="register-title">
          <img src={logo} alt=""/>
          <span>NOVO CADASTRO</span>
        </div>
        <div className="register-form">
          <form>
            <label htmlFor="nome">Nome:</label>
            <input type="text" name="nome" id="nome" placeholder="seu nome aqui" />

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="seu email aqui" />

            <label htmlFor="senha">Senha:</label>
            <input type="password" name="password" id="password"  placeholder="insisra sua senha" />

            <label htmlFor="confirmarSenha">Confirmar Senha:</label>
            <input type="password" name="confirmarSenha" id="confirmarSenha"  placeholder="insisra sua senha novamente" />

            <button>Entrar</button>
          </form>
        </div>

        <div className="register-login">
          <span>Já tem conta?</span>
          <Link to="/login">
            Entrar conta agora!
          </Link>
        </div>

        <div className="register-footer">
          
          <div className="register-footer--com">
            <span><small>OU entrar com</small></span>
          </div>

          <div className="register-footer--redes-sociais">
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

export default Register