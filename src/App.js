import './App.css';
import React from 'react';
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/productos/:categoryId' element={<ItemListContainer />} />
        <Route path='item/:itemId' element={<ItemDetailContainer />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>

      <ItemDetailContainer idProducto={1} />
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
