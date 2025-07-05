import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { Link } from 'react-router-dom';
import '../components/login.css'
import axios from 'axios'; 


function MisEntradas({ busqueda = '' }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts') 
      .then(response => {
      
        const publicacionesFiltradas = response.data.filter(post => post.categoria !== "Personal");
        setPosts(publicacionesFiltradas);
      });
  }, []);

  const cargarPosts = async () => {
    try {
      const res = await API.get('/posts');
      setPosts(res.data);
    } catch (error) {
      console.error('Error al cargar publicaciones', error);
    }
  };
  
   const resultados = posts.filter(post =>
    post.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );


  return (
    <div className="logo container-fluid d-flex justify-content-center align-items-center">
    <div className="car-e p-4 rounded shadow ">
      <h2 className="mb-4">Mis Publicaciones</h2>
      <div className="row">
        {(resultados.length > 0 ? resultados : posts).map(post => (
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
                <p className="card-text">
                  {post.contenido.length > 100
                    ? post.contenido.slice(0, 100) + '...'
                    : post.contenido}
                </p>
                <h5><span className="badge bg-secondary">{post.categoria}</span></h5>
              </div>
              <Link to={`/post/${post._id}`} className="btn btn-outline-primary btn-sm mt-2">Ver mas...</Link>
            </div>      

          </div>
        ))}
      </div>
      {busqueda && resultados.length === 0 && (
          <p className="text-muted">No se encontraron resultados para "{busqueda}".</p>
        )}
    </div>
    </div>
  );
}

export default MisEntradas;
