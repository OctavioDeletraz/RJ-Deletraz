import './App.css';
import React from 'react';
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/navbar/itemListContainer/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
