// Se cargan aquí los datos de las películas, que pasarán a los diferentes componentes
import peliculas from "./objetos/peliculas.json";

import Peliculas from "./componentes/Peliculas";
import './App.css';

function App() {
  return (
    <>
      <Peliculas peliculas={peliculas.peliculas} />
    </>
  );
}

export default App;