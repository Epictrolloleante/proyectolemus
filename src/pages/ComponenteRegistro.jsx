import React, { useState } from 'react';

import styles from '../css/ComponenteRegistro.css';
import ComponenteLayout from './ComponenteLayout';

export default function ComponenteRegistro() {
    
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [apellidoP, setApellidoP] = useState('');
    const [apellidoM, setApellidoM] = useState('');
    const [celular, setCelular] = useState('');
    const [usuario, setUsuario] = useState('');

    const data = {
        name: nombre,
        email: email,
        password: password,
        apellidoP: apellidoP,
        apellidoM: apellidoM,
        celular: celular,
        usuario: usuario,
    };

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
      };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };

      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

      const handleApellidoPChange = (event) => {
        setApellidoP(event.target.value);
      };

      const handleApellidoMChange = (event) => {
        setApellidoM(event.target.value);
      };

      const handleCelularChange = (event) => {
        setCelular(event.target.value);
      };

      const handleUsuarioChange = (event) => {
        setUsuario(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
        // Aquí deberías enviar los datos de usuario y contraseña al servidor Laravel
        // utilizando una solicitud POST. Puedes usar la función "fetch" u otra librería
        // de solicitud HTTP como Axios.
    
        
    
        fetch('http://serverreyes.ddns.net:8000/api/register', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            // Maneja la respuesta del servidor aquí (por ejemplo, verifica si el inicio de sesión fue exitoso)
            console.log('Respuesta del servidor:', data);
            if (data.errors) {
                // Muestra los mensajes de error al usuario
                var cad="";
                for (const field in data.errors) {
                  const errorMessages = data.errors[field];
                  cad+=`${field}: ${errorMessages.join(', ')}\n`;
                  
                }
                alert(cad);
              }
            
           else {
              const token = data['access_token'] // Obten el token de la respuesta
              localStorage.setItem('token', token);
              console.log(token);
              alert("Registro Exitoso");
              window.location.href = '/';
            } 
          })
          .catch((error) => {
            // Maneja errores aquí (por ejemplo, muestra un mensaje de error)
            console.error('Error en la solicitud:', error);
            alert('Registro invalido, verifica tus datos.');
          });
      };


    return (
        <ComponenteLayout Titulo='Registro'>
            <div class='Registroprincipal'>
                <div class='Registrocontenedor'>
                    <div class='Registroregistro'>
                        <h3>REGISTRO</h3>
                        <div class='Registroinfo'>
                            <p>Nombre:</p> <input type='text' placeholder='Introduce tu nombre' value={nombre} onChange={handleNombreChange}></input> 
                            <p>Apellido Paterno:</p> <input type='text' placeholder='Introduce tu apellido paterno' value={apellidoP} onChange={handleApellidoPChange} ></input> 
                            <p>Apellido Materno:</p> <input type='text' placeholder='Introduce tu apellido materno' value={apellidoM} onChange={handleApellidoMChange} ></input> 
                            <p>Celular:</p> <input type='tel' placeholder='Introduce tu celular'value={celular} onChange={handleCelularChange} ></input>
                            <p>Correo:</p> <input type='email' placeholder='Introduce tu correo' value={email} onChange={handleEmailChange} ></input>
                            <p>Usuario:</p> <input type='text' placeholder='Introduce un usuario' value={usuario} onChange={handleUsuarioChange} ></input>
                            <p>Contraseña:</p> <input type='password' placeholder='Introduce una contraseña' value={password} onChange={handlePasswordChange} ></input>
                        </div>
                        <button onClick={handleSubmit}>Registrar</button>
                    </div>
                </div>
            </div>
        </ComponenteLayout>
    )
}
