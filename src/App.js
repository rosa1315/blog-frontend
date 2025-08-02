import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import ViewPost from './pages/ViewPost';
import MisEntradas from './components/MisEntradas';
import Login from './components/Login';
import EliminarPost from './pages/EliminarPots';
import LoginEntrada from './pages/LoginEntrada';
import Contacto from './pages/Contacto';
import SobreMi from './pages/SobreMi';
import EditjuntarPost from './pages/EditjuntarPost';
import '../src/components/login.css';
import useHideNavbarOnScroll from './hooks/useHideNavbarOnScroll';
import Proyectos from './pages/Proyectos';
import axios from 'axios'; 
import axiosInstance from './axiosInstance';

function App() {
  useHideNavbarOnScroll();
  const location = useLocation();
  

  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleBuscar = async (e) => {
  e.preventDefault();
  try {
    const response = await axiosInstance.get(`https://blog-backend-0v7w.onrender.com/api/posts/buscar?q=${busqueda}`);
    setResultados(response.data);
  } catch (error) {
    console.error('Error en la búsqueda:', error);
  }
};
  
  const ocultarNavbar = ['/login', '/panel', '/admin/create', '/admin/publicaciones', '/admin/juntar', '/admin/edit/:id'];
  return (
    <>
       {!ocultarNavbar.includes(location.pathname) && (
      <nav id="navbar" className="car1 navbar navbar-dark">
        <div className="car1  container-fluid">
          <a className="admin font navbar-brand" href="#">EduTech Rosa</a> 
          {location.pathname === '/admin' && (
          <form className="d-flex mt-3" role="search" onSubmit={handleBuscar}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <button className="btn btn-success" type="submit">Buscar</button>
          </form>
          )}
          <button className="car1 navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="car1 offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel" ><a className="nav-link active" aria-current="page" href="/login" >AULATECH</a></h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="car1 offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/home">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/admin">PUBLICACIONES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/proyectos">MIS PROYECTOS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page"href="/sobremi">Sobre mi</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/conctacto">¿Quiero contactarte?</a>
                </li>
              </ul>
            </div>
          </div>
        </div>   
      </nav>
       )}
    <div style={{ paddingTop: '100px' }}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home busqueda={busqueda}/>} />
        <Route path="/post/:id" element={<ViewPost />} />
        <Route path="/admin/create" element={<CreatePost />} />
        <Route path="/admin/edit/:id" element={<EditPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/publicaciones" element={<EliminarPost />} />
        <Route path="/panel" element={<LoginEntrada />} />
        <Route path="/sobremi" element={<SobreMi />} />
        <Route path="/conctacto" element={<Contacto />} />
        <Route path="/admin/juntar" element={<EditjuntarPost />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/admin" element={<MisEntradas busqueda={busqueda} />} />
      </Routes>
    </div>
     
   </>
  );
}

export default App;