import React, { useState, useEffect } from 'react';
import Logout from './Logout'; // Supongamos que tienes una función checkAuthorization definida

function MyComponent() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    Logout()
      .then((result) => {
        setIsAuthenticated(result);
      })
      .catch((error) => {
        console.error('Error en la autorización:', error);
        setIsAuthenticated(false);
      });
  }, []);

  if (isAuthenticated === null) {
    // El estado aún es nulo, podrías mostrar un mensaje de "Cargando..."
    return <p>Cargando...</p>;
  } else if (isAuthenticated) {
    // Usuario autenticado
    return (
      <div>
        <h1>Logout Correcto</h1>
        {window.location.href = '/'}
        {/* Agrega aquí lo que deseas mostrar cuando el usuario esté autenticado */}
      </div>
    );
  } else {
    // Usuario no autenticado
    return (
      <div>
        <h1>Token Incorrecto o Inexistente</h1>
        {window.location.href = '/'}
        {/* Agrega aquí lo que deseas mostrar cuando el usuario no esté autenticado */}
      </div>
    );
  }
}

export default MyComponent;
