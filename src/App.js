import './App.css';
import React from 'react';
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { CartContext } from './context/CartContext';
import { useState } from 'react';
import { Cart } from './components/Cart/Cart';

function App() {

  const [cart, setCart] = useState([])
  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  return (

    <CartContext.Provider value={
      {
        cart,
        addToCart,
        isInCart
      }
    }>

      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>

      </BrowserRouter>
    </CartContext.Provider>

  );
}

export default App;
