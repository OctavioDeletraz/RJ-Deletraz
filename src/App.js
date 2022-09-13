import './App.css';
import React from 'react';
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <CartProvider>

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
    </CartProvider>

  );
}

export default App;
