import React, { useState } from 'react';
import '../style/login.css';
//import { Link } from 'react-router-dom';

function Logins({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const validUsers = [
      { username: 'admin', password: '1234' },
      { username: 'edwin', password: 'edwin' },
   
    ];

    let isValidUser = false;
    for (let i = 0; i < validUsers.length; i++) {
      if (username === validUsers[i].username && password === validUsers[i].password) {
        isValidUser = true;
        break;
      }
    }

    if (isValidUser) {
      alert('Inicio de sesión exitoso');
      onLogin();
    } else {
      setErrorMessage('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className='Logins'>
      <div className="alturaCompleta">
        <nav className="navbar navbar-light bg-light d-md-none">
          <div className="container-fluid">
          </div>
        </nav>
        <div className="container-fluid alturaCompleta m-0 p-0">
          <div className="row alturaCompleta w-100 m-0 p-0">
            <div className="col-12 col-md-5 bg-light d-none d-md-flex justify-content-center align-items-center">
              <div className="contenido">
                <p className='colorLetra'>Empresa Multigranos Bonanza</p>
              </div>
            </div>
            <div className="col-12 col-md-7 bg-intecap d-md-flex justify-content-center align-items-center pt-5">
              <div className="card shadow w-100" style={{ maxWidth: '500px' }}>
                <form onSubmit={handleSubmit} id="loginForm">
                  <div className="text-center mb-4">
                    <i className="fas fa-user color-bonanza iconoUsuario p-2" />
                    <h2 className="color-bonanza p-2">Credenciales</h2>
                  </div>

                  <div className="m-3">
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Ingresa tu usuario" />
                  </div>
                  <div className="m-3">
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Ingresa tu contraseña" />
                  </div>

                  <div className="m-3">
                  
                    <button type="submit" className="btn color-boton w-100">Ingresar</button>
                    <p id="error-message" className="error-message">{errorMessage}</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logins;
