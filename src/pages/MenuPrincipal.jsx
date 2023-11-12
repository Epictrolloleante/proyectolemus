import React, { useState, useEffect } from 'react';
import Auth from './Auth';
import stylees from '../css/MenuPrincipal.css';
import ComponenteLayout from './ComponenteLayout';
import bootstrap from 'bootstrap';
export default function MenuPrincipal() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Usar null para indicar "cargando"
 


  useEffect(() => {
    Auth()
      .then((isAuthenticated) => {
        setIsAuthenticated(isAuthenticated);
      })
      .catch((error) => {
        console.log('Error en la solicitud:', error);
        setIsAuthenticated(false);
      });
  }, []);


  return (

    <ComponenteLayout Titulo="Home">

      <div class="Principalprincipal">

        <div class="PrincipalcontenedorP">
          {isAuthenticated ? (<h1>Bienvenido</h1>):
          (<><h1>Bienvenido al Sistema de *inserte nombre*  del CASEI</h1><h2>Por favor inicie sesion para continuar</h2></>)}
          

        </div>


      </div>

    </ComponenteLayout>
  )
}

