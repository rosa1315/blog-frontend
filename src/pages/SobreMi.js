import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { Link } from 'react-router-dom';

function SobreMi() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get('/posts')
    .then(res => setPosts(res.data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div className="login-bg container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="card1 shadow p-4">
            <h1 className="display-4">¡Bienvenidos a mi Blog!</h1>
        <p className="lead">Aquí comparto mis pensamientos, ideas y proyectos.</p>
            <div className="card-body">
              <h5 className="card-title">Sobre mí</h5><br></br>
              <p className="card-text">Soy Rosa Díaz, tecnóloga en desarrollo de software que decidió convertir su pasión por enseñar en un camino de vida como docente de primaria.</p>
              <p className="card-text">Desde la tecnología llegué al aula, y descubrí que enseñar es una forma hermosa de transformar realidades. Cada niño aprende de forma única, y la educación no solo necesita amor, sino también innovación. Por eso, decidí unir ambos mundos: la programación y la pedagogía.</p>
              <p className="card-text"> “Creo que la tecnología puede ser un puente para transformar el aula."</p>
              <p className="card-text">Combinar el desarrollo de software con las herramientas educativas me ha permitido crear recursos, experimentar con nuevas metodologías y desarrollar proyectos que inspiran tanto a mis estudiantes como a mí misma.
              Este blog nace como un espacio para compartir mi camino, mis ideas y mis proyectos. Aquí encontrarás una mezcla entre código, clases y creatividad… siempre con propósito y corazón.</p>
              <p className="card-text"> “Educar con amor, programar con propósito.”</p>
            </div>
      </div>
    </div>
    

    
  );
}

export default SobreMi;