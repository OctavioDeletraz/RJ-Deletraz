import './App.css';
import React from 'react';
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        {/* Listado de rutas */}
        <Route path="contacto" element={<contacto />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>

      <NavBar />
      <ItemListContainer titulo="MI TIENDA ONLINE" />
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
