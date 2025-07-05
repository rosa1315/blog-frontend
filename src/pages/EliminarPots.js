import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { Link } from 'react-router-dom';
import '../components/login.css'

function EliminarPost() {
  const [posts, setPosts] = useState([]);

  const obtenerPublicaciones = async () => {
    try {
      const res = await API.get('/posts');
      setPosts(res.data);
    } catch (err) {
      console.error('Error al obtener publicaciones:', err);
    }
  };

  const eliminarPost = async (id) => {
      try {
        await API.delete(`/posts/${id}`);
        setPosts(posts.filter(post => post._id !== id));
      } catch (err) {
        alert('Error al eliminar publicación.');
        console.error(err);
      }
  };

  useEffect(() => {
    obtenerPublicaciones();
  }, []);

  return (
    <div className="logo container-fluid d-flex justify-content-center align-items-center">
    <div className="car-e p-4 rounded shadow-lg">
      <h2 className="text-center mb-4">Mis Publicaciones</h2>
      <div className="row">
        {posts.map(post => (
          <div className="col-md-4 mb-4" key={post._id}>
            <div className="card h-100">
              {post.imagen && <img src={post.imagen} className="card-img-top" alt={post.titulo} />}
              <div className="card-body">
                <h5 className="card-title">{post.titulo}</h5>
                <p className="card-text">{post.contenido.substring(0, 100)}...</p>
                <p><span className="badge bg-info">{post.categoria}</span></p>
                <button onClick={() => eliminarPost(post._id)} className="btn btn-danger btn-sm">Eliminar</button>
              </div>
            </div>
          </div>
        ))}
        {posts.length === 0 && (
          <div className="alert alert-info">No tienes publicaciones aún.</div>
        )}
      </div>
    </div>
    </div>
  );
}

export default EliminarPost;
