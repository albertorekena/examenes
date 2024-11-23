import Pelicula from "./Ejercicio1/Pelicula";

function App() {
  const elenco = [
    {nombre:"nombreActor", foto:"fotoActor", biografia:"biografiaActor"},
    {nombre:"nombreActriz", foto:"fotoActriz", biografia:"biografiaActriz"}
  ];
  
  return (
    <div className="contenedor">
      <span>Contenedor</span>
      {/* El componente película contendrá todos los subcomponentes necesarios para renderizar una
      película completa en el navegador */}
      <Pelicula
        titulo="Título de la película"
        direccion="dirección"
        cartela="https://picsum.photos/id/537/200/300"
        elenco={elenco}
      >
        {/* El contenido que hay entre las etiquetas del componente se adjudicará al atributo children */}
        Resumen
      </Pelicula>
    </div>
  );
}

export default App;
