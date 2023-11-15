import React, { useState, useEffect } from 'react';
import ComponenteLayout from './ComponenteLayout'
import Auth from './Auth';

export default function Modulo1() {
    const [sidebarItems, setSidebarItems] = useState([
        {level:'1',type:'activo',link:'/link1',text:'Menu'},
        {level:'1',type:'inactivo',link:'/link1',text:'item1'},
        {level:'2',type:'inactivo',link:'/link2',text:'item2'},
        {level:'1',type:'activo',link:'/link1',text:'Menu'},
      ]);

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


      if(isAuthenticated){
        return (
            <ComponenteLayout Titulo="Componente1" sidebarItems={sidebarItems}> 
                <div class='modulo1main'>
                    <h1>Modulo 1</h1>
                </div>
            
            </ComponenteLayout>
        
            
          )
      }
      else{
        return(
            <h1>Acceso denegado</h1>
        )
      }
  
}
