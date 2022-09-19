import './App.css';
import React from 'react';
import { CartProvider } from './context/CartContext';
import { LoginProvider, useLoginContext } from './context/LoginContext';
import { AppRouter } from './router/AppRouter';

function App() {

  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
