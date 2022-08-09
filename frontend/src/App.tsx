import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import ProdutoItem from './pages/ProdutoItem';
import MeuCarrinho from './pages/Cart';
import Navbar from './components/Navbar';
import SearchProduct from './components/SearchProduct';
import './global.scss'


const  App = () => {
  return (
    
    <Router>
      <Navbar />
      <SearchProduct />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:uuid" element={<ProdutoItem />} />
        <Route path="/meu-carrinho" element={<MeuCarrinho />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;
