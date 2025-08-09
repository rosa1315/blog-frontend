import React, { useState } from 'react';
import './login.css'; // Estilos personalizados
import { useNavigate } from 'react-router-dom';
import API from '../services/api'


const Login = () => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();
     try {
      const res = await API.post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, contraseña });
      
      // Asegúrate que esta línea exista y esté correcta
      localStorage.setItem('token', res.data.token);
      console.log('Token guardado:', res.data.token);

      navigate('/panel');
    } catch (err) {
      console.error(err);
      setError('Credenciales inválidas o error al iniciar sesión');
    }
  };

  return (
    <div className="login-bg container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="login-card p-4 rounded shadow ">
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handlelogin}>
          <div className="mb-3">
            <label>Usuario</label>
            <input type="email"
              className="form-control"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              required/>
          </div>
          <div className="mb-3">
            <label>Contraseña</label>
            <input type="password"
              className="form-control"
              name="password"
              placeholder="password"
              onChange={(e) => setContraseña(e.target.value)}
              required />
          </div>
          <button className="btn btn-gradient w-100" type="submit" >Iniciar Sesión</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
