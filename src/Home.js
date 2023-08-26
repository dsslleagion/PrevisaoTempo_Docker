// src/components/Home.js
import React from 'react';
import logoImage from './logo-white.png';
import backgroundImage from './unsplash.jpg'; // Substitua pelo nome da sua imagem de fundo

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav>
        <div className="nav-wrapper blue">
          <a href="#" className="brand-logo center">
            <img src={logoImage} alt="Logo" className="logo-image" />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <form>
                <div className="input-field">
                  <input id="search" type="search" required placeholder="" />
                  <label className="label-icon" htmlFor="search"><i className="material-icons">Digite a localização</i></label>
                  <i className="material-icons">close</i>
                </div>
              </form>
            </li>
            <li>
              <a href="#" className="waves-effect waves-light btn grey"><i className="material-icons left">Buscar</i></a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container center" style={{ flex: 1 }}>
        <h3>Bem-vindo à Página Inicial</h3>
        <div className="row">
          <div className="col s12">
            <div className="card-panel grey lighten-3">
              <div className="row">
                <div className="col s12 m6">
                  <div className="card white">
                    <div className="card-content">
                      <span className="card-title">Clima do Dia</span>
                      <p>Informações sobre o clima</p>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="card white">
                    <div className="card-content">
                      <span className="card-title">Outras Informações</span>
                      <p>Outras informações relevantes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
