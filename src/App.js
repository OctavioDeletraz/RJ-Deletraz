import './App.css';
import React from 'react';
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import { LoginProvider } from './context/LoginContext';
import { LoginScreen } from './components/LoginScreen/LoginScreen';

function App() {

  return (
    <LoginProvider>

      <CartProvider>

        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer />} />

            <Route path='/login' element={<LoginScreen />} />

            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </LoginProvider>

  );
}

export default App;
