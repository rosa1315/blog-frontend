import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';
import '../components/login.css'

function ViewPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await API.get(`/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error(err);
        setError('No se pudo cargar la publicación');
      }
    };

    fetchPost();
  }, [id]);

  if (error) return <div className="alert alert-danger mt-5">{error}</div>;
  if (!post) return <div className="text-center mt-5">Cargando publicación...</div>;

  return (
     <div className="logo container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="card2 shadow p-4">
        {post.imagen && (
          <img
            src={post.imagen}
            alt={post.titulo}
            className="img-fluid mb-4 rounded"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        )}
        <h1>{post.titulo}</h1>
        <h3><span className="ver badge bg-secondary mb-3">{post.categoria}</span></h3>
        <p>{post.contenido}</p>
      </div>
    </div>
  );
}

export default ViewPost;
