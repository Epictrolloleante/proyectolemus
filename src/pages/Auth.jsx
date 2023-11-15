import axios from 'axios';

const checkAuthorization = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Si no hay token, no estás autenticado
    return Promise.resolve(false);
  }

  return fetch('http://serverreyes.ddns.net:8001/api/user-only', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === 'Autenticado') {
        console.log("Autenticación exitosa");
        const fullName = `${data.user.name} ${data.user.apellidoP} ${data.user.apellidoM}`;
        localStorage.setItem('nombre', fullName);
        return true;
      } else {
        console.log(token);
        console.log("Autenticación fallida");
        return false;
      }
    })
    .catch((error) => {
      console.log('Error en la solicitud:', error);
      return false;
    });
};

export default checkAuthorization;
