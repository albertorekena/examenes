const mostrarDiscos = discos => {
  const divDiscos = document.getElementById("div-discos");
  divDiscos.innerHTML = "";
  const arrHtmlDivDiscos = [];

  arrHtmlDivDiscos.push("<h2 class='discos__title'>Discos</h2>");

  if (discos.length > 0) {
    let htmlDisco;

    discos.forEach(disco => {
      htmlDisco = `
        <div class="discos__disco">
          <p><span class="discos__key">nombre</span>: ${disco.nombre}</p>
          <p><span class="discos__key">grupo</span>: ${disco.grupo}</p>
          <p><span class="discos__key">año publicación</span>: ${disco.anyoPublicacion}</p>
          <p><span class="discos__key">tipo música</span>: ${disco.tipoMusica}</p>
          <p><span class="discos__key">localización</span>: ${disco.localizacion}</p>
          <p><span class="discos__key">prestado</span>: ${disco.prestado ? "Sí" : "No"}</p>
        </div>
      `;

      arrHtmlDivDiscos.push(htmlDisco);
    });
  } else {
    arrHtmlDivDiscos.push("<p>no hay discos para mostrar :(");
  }

  divDiscos.insertAdjacentHTML("beforeend", arrHtmlDivDiscos.join(""));
};

export {mostrarDiscos};