import React, { useState } from 'react';
import API from '../services/api';
import '../components/login.css';

import { useNavigate } from 'react-router-dom';


function CreatePost() {
  const [form, setForm] = useState({ titulo: '', contenido: '', categoria: '', imagen: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
  e.preventDefault();
  try {
    const token = localStorage.getItem('token');
    await API.post('/posts', form, {
      headers: {
        Authorization: `Bearer ${token}`   // <-- CORRECTO
      }
    });
    navigate('/panel');
  } catch (err) {
    console.error('Error completo:', err);
    console.error('Respuesta del servidor:', err.response?.data);
    setError(
      err.response?.data?.mensaje ||
      'Error al crear el post. Verifica los campos o si tu sesión está activa.'
    );
  }
};

  return (
    <div className="login-bg container-fluid d-flex justify-content-center align-items-center vh-100">
      {error && <div className="alert alert-danger">{error}</div>}
        <div className="login p-4  rounded shadow ">
          <h2 className="text-center mb-4">Crear publicación</h2> 
           <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                name="titulo"
                className="form-control"
                placeholder="Título"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="contenido"
                className="form-control"
                placeholder="Contenido"
                onChange={handleChange}
                required
              />
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
              <input
                name="imagen"
                className="form-control"
                placeholder="URL de la imagen"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">Guardar publicación </button>
          </form>
        </div>
      </div>
      
    
  );
}

export default CreatePost;
