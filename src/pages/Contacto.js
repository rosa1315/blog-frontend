import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { Link } from 'react-router-dom';

function Contacto() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get('/posts')
    .then(res => setPosts(res.data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div className="logo container-fluid d-flex justify-content-center align-items-center">
      <div className="card2 shadow ">
        <h1 className="display-4">¿Quieres contactarme?</h1>
        <div className="card-body">
          <h5 className="card-title">¿Te gustaría trabajar conmigo?</h5>
          <p className="card-text">Si estás buscando a una persona comprometida, creativa y con formación en tecnología y educación, estaré encantada de escuchar tu propuesta.</p>
          <p className="card-text">Soy tecnóloga en desarrollo de software y docente de primaria, con experiencia en el diseño de recursos digitales, desarrollo web y creación de estrategias pedagógicas innovadoras.</p>
          <p className="card-text">Puedes contactarme si estás interesado en:</p>
            <ul>
              <li>Desarrollar una página web (personal, institucional o educativa)</li>
              <li>Crear un proyecto educativo que integre herramientas digitales.</li>
              <li>Colaborar en iniciativas que busquen transformar la educación a través de la tecnología.</li>
            </ul>
          
          <p className="card-text"> Puedes escribirme directamente a: blogrosa.tips@gmail.com</p>
          <p className="card-text">También puedes dejarme un mensaje en el formulario de contacto, y me comunicaré contigo a la mayor brevedad posible.</p>
          <p className="card-text">Será un gusto conocerte y explorar oportunidades para crear algo valioso juntos.</p>

        </div>
      </div>
    </div>

    

    
  );
}

export default Contacto;