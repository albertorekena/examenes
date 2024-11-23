const info = document.getElementById("info");
let elementoAImprimir;

info.insertAdjacentHTML("beforebegin", "<hr>");

// Número de párrafos de la página
const parrafos = document.getElementsByTagName("p");
info.innerHTML = `<h4>El número de párrafos de la página es --> <u>${parrafos.length}</u></h4>`;

// el texto del segundo párrafo
info.insertAdjacentHTML("beforeend", `<h4>El texto del segundo párrafo es --> <u>${parrafos[1].textContent}</u></h4>`);

// el número de enlaces de la página
const enlaces = document.querySelectorAll("a");
info.insertAdjacentHTML("beforeend", `<h4>El número de enlaces de la página es --> <u>${enlaces.length}</u></h4>`);

// la dirección del primer enlace
info.insertAdjacentHTML("beforeend", `<h4>La dirección del primer enlace es --> ${enlaces[0].getAttribute("href")}</h4>`);

// la dirección del penúltimo enlace
info.insertAdjacentHTML("beforeend", `<h4>La dirección del penúltimo enlace es --> ${enlaces[enlaces.length - 2].getAttribute("href")}</h4>`);