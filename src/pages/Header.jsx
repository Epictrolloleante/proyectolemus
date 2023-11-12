import React, { useState, useEffect } from 'react';
import Auth from './Auth';
import styles from '../css/Header.css';
import { Link } from 'react-router-dom';
export default function Header(props) {
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

  //<Link to={"/"}><p>Inicio</p></Link>
  return (
    <div class="Headermenu">
      { isAuthenticated ? (
        <div id='HeaderDropdown'class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {props.Titulo}
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </div>
      ) : (
        <p>{props.Titulo}</p>
      )}
      <div class="Headeropc-menu">
        {isAuthenticated ? (<></>) : (
          <div><Link to={'/Login'}><p>Login</p></Link></div>
        )}
        {isAuthenticated ? (
          <div><Link to={'/Logout'}><p>Logout</p></Link></div>) : (<></>)}


      </div>
    </div>
  )

  function DropdownItem(){
    return(
      <li className='dropdown-item'>
        <div><Link to={'/Login'}><p>Login</p></Link></div>
      </li>

    )
  }
}
