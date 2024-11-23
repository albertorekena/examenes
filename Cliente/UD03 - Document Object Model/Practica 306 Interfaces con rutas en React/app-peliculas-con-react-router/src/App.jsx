import {BrowserRouter} from "react-router-dom";
import peliculas from "./objetos/peliculas.json";
import Header from "./componentes/Header";
import Menu from "./componentes/Menu";
import Contenido from "./componentes/Contenido";
import Footer from "./componentes/Footer";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      {/* Cargamos en App todas las películas y las pasamos como prop al componente contenido */}
      <Contenido peliculas={peliculas.peliculas} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;