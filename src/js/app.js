
const listaProyectos = () => fetch('https://raw.githubusercontent.com/FLRSscript/proyectosAPI/main/db.json').then(respuesta => respuesta.json());

const mostrarProyecto = (nombre, imagen, descripcion, tecnologias) => {
    const proyectoCard = document.createElement('div');
    proyectoCard.className = 'proyecto__card';

    // Generar el código HTML para las tecnologías dinámicamente
    let tecnologiasHTML = '';
    tecnologias.forEach(tecnologia => {
        tecnologiasHTML += `
            <div class="tecnologia ${tecnologia}">
                <img class="tecnologia__icon" src="/build/img/${tecnologia}.webp" alt="imagen lenguaje">
                <p class="tecnologia__nombre">${tecnologia}</p>
            </div>`;
    });

    const contenido = `
    <div class="proyecto__imagen" style="background-Image: url(${imagen})"></div>
    <div class="proyecto__info">
        <h4 class="proyecto__titulo">${nombre}</h4>
        <p class="proyecto__descripcion">${descripcion}</p>
        <div class="proyecto__tecnologias">
            ${tecnologiasHTML}
        </div><!-- PROYECTO TECNOLOGIAS -->
        <div class="proyecto__links">
            <div class="link__git">
                <a class="github" href=""><i class="bi bi-info-circle-fill"></i></a>
            </div>
            <div class="link__link">
                <a class="link" href=""><i class="bi bi-link"></i></a>
            </div>
        </div><!-- PROYECTO LINKS -->
    </div><!-- PROYECTO INFO -->
    `;

    proyectoCard.innerHTML = contenido;
    return proyectoCard;
};

listaProyectos().then(data => {
    data.forEach(({ nombre, imagen, descripcion, tecnologias }) => {
        const contenedorProyectos = document.querySelector('.proyectos__contenedor');
        const proyecto = mostrarProyecto(nombre, imagen, descripcion, tecnologias);

        contenedorProyectos.appendChild(proyecto);

    })
})
