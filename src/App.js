import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPrincipal from './pages/MenuPrincipal';
import ComponenteLogin from './pages/ComponenteLogin';
import ComponenteRegistro from './pages/ComponenteRegistro';
import ComponenteLogout from './pages/ComponenteLogout';
import Logout from './pages/ComponenteLogout';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
  <BrowserRouter>

    <Routes>
      <Route path="/login" element={<ComponenteLogin />}>   </Route>
      <Route path='/Registro' element={<ComponenteRegistro/>}></Route>
      <Route path="/MenuPrincipal" element={<MenuPrincipal />}>   </Route>
      <Route path="/" element={<MenuPrincipal />}>   </Route>
      <Route path="/logout" element={<Logout />}>   </Route>

      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
