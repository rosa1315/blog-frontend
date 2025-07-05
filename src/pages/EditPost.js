// src/pages/EditPost.js
import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import '../components/login.css';

function EditPost() {
  const [form, setForm] = useState({ titulo: '', contenido: '', categoria: '', imagen: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams(); // ID desde la URL

  // Cargar datos del post existente
  useEffect(() => {
    API.get(`/posts/${id}`)
      .then(res => setForm(res.data))
      .catch(err => {
        console.error(err);
        setError('No se pudo cargar el post.');
      });
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await API.put(`/posts/${id}`, form);
      navigate('/admin/juntar'); // Redirigir después de editar
    } catch (err) {
      console.error(err);
      setError('Error al actualizar el post.');
    }
  };

  return (
    <div className="login-bg container-fluid d-flex justify-content-center align-items-center vh-100 ">
        {error && <div className="alert alert-danger">{error}</div>}
      <div className="login p-4 rounded shadow ">
        <h2 className="text-center mb-4">Editar Publicación</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            name="titulo"
            className="form-control"
            value={form.titulo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contenido</label>
          <textarea
            name="contenido"
            className="form-control"
            rows="5"
            value={form.contenido}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Categoría</label>
          <select
                  name="categoria"
                  className="form-control"
                  value={form.categoria}
                  onChange={handleChange}
                  required
                >
                <option value="">Selecciona una categoría</option>
                <option value="Tecnologia">Tecnologia</option>
                <option value="Educacion">Educacion</option>
                <option value="Personal">Personal</option>
                  </select>
        </div>

        <div className="mb-3">
          <label className="form-label">URL de Imagen</label>
          <input
            type="text"
            name="imagen"
            className="form-control"
            value={form.imagen}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100"  >Guardar Cambios</button>
    </form>
    </div>
    </div>
  );
}

export default EditPost;
