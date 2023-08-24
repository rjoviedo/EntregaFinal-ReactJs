import './style.css';
import NavBar from './components/header/NavBar';
import ContainerCardItems from './components/components item/ContainerCardItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailsItem from './components/components item/DetailsItem';
import { createContext, useState } from 'react';
import ProviderContextCart from "./components/components item/ProviderContextCart";

function App() {
  return (
  <ProviderContextCart>
    <BrowserRouter>
      <NavBar/>
          <Routes>
            <Route path="/" element={ <ContainerCardItems />} />
            <Route path="/items/:idItem" element={ <DetailsItem />} />
            <Route path="/category/:idCategory" element={ <ContainerCardItems />} />
          </Routes>
    </BrowserRouter>
  </ProviderContextCart>  
  );
}

export default App;
