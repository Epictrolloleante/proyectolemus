// Layout.js

import React, { useState, useEffect } from 'react';
import Auth from './Auth';
import styles from '../css/ComponenteLayout.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Layout(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Usar null para indicar "cargando"
  
  console.log(props.sidebarItems);
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
    <div className="Layoutprincipal">
      <div className="Layoutheader">
        <Header id="barraMenu" Titulo={props.Titulo} />
      </div>

      <div className="Layoutcontainer">
        {isAuthenticated ? (
          <><div className="Layoutsidebar">
            <Sidebar id="lateral"  items={props.sidebarItems}/>
          </div><main className="Layoutmain">{props.children}</main></>
        ) : (
          <>
            
            <main className="Layoutmain" style={{ width: '100%',height:'100%' }}>{props.children}</main>
          </>
        )}

      </div>
      <div className="Layoutfooter">
        <Footer id="footer" />
      </div>

    </div>
  );
}

export default Layout;