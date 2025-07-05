import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { Link } from 'react-router-dom';
import '../components/login.css'

function LoginEntrada() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get('/posts')
    .then(res => setPosts(res.data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div className="admin-panel container-fluid text-white">
  <div className="col-md-12 text-center mb-5">
    <h1 className="admin display-4">¡Bienvenido al panel!</h1>
    <hr className="my-4 text-white" />
  </div>

  <div className="row justify-content-center g-3">
    <div className="col-md-4">
      <div className="card shadow-sm">
        <div className="home card-body text-center">
          <h5 className="card-title">
            <a className="nav-link active" href="/admin/create">Crear publicación</a>
          </h5>
          <p className="card-text">Porfavor ingrese a crear su publicación</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card shadow-sm">
        <div className="home card-body text-center">
          <h5 className="card-title">
            <a className="nav-link active" href="/admin/juntar">Editar publicación</a>
          </h5>
          <p className="card-text">Edita tu contenido subido</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card shadow-sm">
        <div className="home card-body text-center">
          <h5 className="card-title">
            <a className="nav-link active" href="/admin/publicaciones">Eliminar publicación</a>
          </h5>
          <p className="card-text">Puedes eliminar el contenido que no quieres que vea tu público</p>
        </div>
      </div>
    </div>
    <li className="nav-item">
          <button
  className="btn btn-danger"
  onClick={() => {
    localStorage.removeItem('token'); // Elimina el token
    window.location.href = '/home'; // Redirige al login
  }}>
  Cerrar sesión
</button>        
     </li>
    

  </div>
</div>

    

    
  );
}

export default LoginEntrada;