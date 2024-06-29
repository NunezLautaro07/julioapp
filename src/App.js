
import React from 'react';
import { Routes, Route } from "react-router-dom"
import Nav from './componentes/nav.jsx';
import PaginaEspecial from "./componentes/PaginaEspecial.jsx";
import Centrodelapagina from './componentes/centrodelapagina.jsx';
import "./style.css"
import "./App.css"



function App() {
  return (
    <div className="App">
       <div className="container-fluid">
    <div className="row">
        <Nav/>
      </div>
    </div>
    <div className="container">
      
      <div className="row">
        <Routes>
          <Route path='/' element={ <Centrodelapagina />}></Route>
          <Route path='/paginaprivada' element={<PaginaEspecial />} />

        </Routes>
     
      
      </div>
      
      </div>
    </div>
  );
}

export default App;
