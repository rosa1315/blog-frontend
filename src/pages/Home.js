import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { Link } from 'react-router-dom';
import "../components/login.css";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get('/posts')
    .then(res => setPosts(res.data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div className="letra admin-panel container-fluid text-white">
      <div className="col-md-12 text-center mb-5">
        <div className="admin text-center">
          <h1 className=" display-4">¡Bienvenidos a mi Blog!</h1>
          <p className="lead">Aquí comparto mis pensamientos, ideas y proyectos.</p>
          <p className="lead">Los invito a leer el contenido</p>
        </div>
      <hr className="my-5" />
      <div className="row ">
        <div className="col-md-4">
          <div className="">
            <div className="home card-body text-center ">
              <h5 className="card-title" ><a className="nav-link active" aria-current="page" href="/admin" >Temas del Blog</a></h5>
              <p className="card-text" >Educación, tecnología y proyectos personales.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="">
            <div className="home card-body text-center  ">
              <h5 className="card-title" ><a className="nav-link active" aria-current="page" href="/sobremi" >Sobre Mi</a></h5>
              <p className="card-text" >Soy docente y tecnóloga en desarrollo de software. Este blog une ambas pasiones.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="">
            <div className="home card-body text-center ">
              <h5 className="card-title" ><a className="nav-link active" aria-current="page" href="/conctacto" >¿Quieres contactarme?</a></h5>
              <p className="card-text" >Me podras escribir a mi correo...</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    

    
  );
}

export default Home;