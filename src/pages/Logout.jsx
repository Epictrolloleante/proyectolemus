import axios from 'axios';

const logout = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Si no hay token, no estás autenticado
    console.log("No hay token")
    return Promise.resolve(false);
  }

  return fetch('http://serverreyes.ddns.net:8000/api/logout', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
    .then((response) => response.text())
    .then((text) => {
    const response = JSON.parse(text);
    const message = response.message;
        console.log(message);
      if (message=== 'Sesion Cerrada') {
        console.log("Sesion Cerrada");
        localStorage.setItem('token','');
        return true;

      } else {
        console.log("El token no es valido");
        //window.location.href = '/';
        localStorage.setItem('token','');
        return false;
      }
    })
    .catch((error) => {
      console.log('Error en la solicitud:', error);
      localStorage.setItem('token','');
      return false;
    });
};

export default logout;