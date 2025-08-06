
import API from '../services/api';
import { Link } from 'react-router-dom';
import '../components/login.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstance from '../api';

function Proyectos() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    axios.get("posts")
      .then(response => {
        const soloProyectos = response.data.filter(post => post.categoria === "Personal"); 
        setProyectos(soloProyectos);
      })
      .catch(error => {
        console.error('Error al cargar los proyectos:', error);
      });
  }, []);

  return (
    <div className="logo container-fluid d-flex justify-content-center align-items-center">
      <div className="car-e p-4 rounded shadow">
        <h2 className="mb-4">Mis Proyectos</h2>
        <div className="row">
          {proyectos.map(post => (
            <div className="col-md-4 mb-4" key={post._id}>
              <div className="card h-100 shadow">
                {post.imagen && (
                  <img
                    src={post.imagen}
                    className="card-img-top"
                    alt={post.titulo}
                    style={{ maxHeight: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body">
                  <h4 className="card-title">{post.titulo}</h4>
                  <p className="card-text">{post.contenido}</p>
                  <span className="badge bg-secondary">{post.categoria}</span>
                </div>
                <Link to={`/post/${post._id}`} className="btn btn-outline-primary btn-sm mt-2">Ver más...</Link>
              </div>
            </div>
          ))}
          {proyectos.length === 0 && (
            <p className="text-muted">No hay proyectos aún.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
