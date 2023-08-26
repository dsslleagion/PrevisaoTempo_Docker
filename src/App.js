import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './Navbar';
import Home from './Home';
import M from 'materialize-css';
import './styles.css';
import './App.css';

function App() {
  useEffect(() => {
    // Inicializa os componentes do Materialize
    M.AutoInit();
  }, []);

  return (
    <div className="App">

      <Home></Home>
      {/* Conteúdo do seu aplicativo */}
    </div>
  );
}

export default App;
