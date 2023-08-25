
const listaProyectos = () => fetch('https://raw.githubusercontent.com/FLRSscript/proyectosAPI/main/db.json').then(respuesta => respuesta.json());

// Función para redireccionar a una página con el ID como parámetro
const redirigirProyecto = (id, nombre, imagen, descripcion, tecnologias, info, link) => {
    const urlParams = new URLSearchParams();
    urlParams.append('id', id);
    urlParams.append('nombre', nombre);
    urlParams.append('imagen', imagen);
    urlParams.append('descripcion', descripcion);
    urlParams.append('tecnologias', tecnologias);
    urlParams.append('info', info);
    urlParams.append('link', link);

    // Redirigir a la página con los parámetros en la URL
    window.location.href = `proyecto.html?${urlParams.toString()}`;
};

// Función para mostrar el proyecto con enlace y capturar el ID
const mostrarProyecto = (id, nombre, imagen, descripcion, tecnologias, info, link) => {
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
                <a id="${id}" class="github" href="javascript:void(0);"><i class="bi bi-info-circle-fill"></i></a>
            </div>
            <div class="link__link">
                <a class="link" href=""><i class="bi bi-link"></i></a>
            </div>
        </div><!-- PROYECTO LINKS -->
    </div><!-- PROYECTO INFO -->
    `;

    proyectoCard.innerHTML = contenido;

    // Agregar evento de clic al enlace con ID
    const enlaceProyecto = proyectoCard.querySelector('.github');
    enlaceProyecto.addEventListener('click', () => {
        redirigirProyecto(id, nombre, imagen, descripcion, tecnologias, info, link);
    });

    return proyectoCard;
};

listaProyectos().then(data => {
    data.forEach(({id, nombre, imagen, descripcion, tecnologias, info, link }) => {
        
        const contenedorProyectos = document.querySelector('.proyectos__contenedor');
        const proyecto = mostrarProyecto(id, nombre, imagen, descripcion, tecnologias, info, link);

        contenedorProyectos.appendChild(proyecto);

    })
})

        // // Obtener los parámetros de la URL
        //         const urlParams = new URLSearchParams(window.location.search);
        //         const id = urlParams.get('id');
        //         console.log(id);
        //         const nombre = urlParams.get('nombre');
        //         const imagen = urlParams.get('imagen');
        //         const descripcion = urlParams.get('descripcion');

        //         // Mostrar las propiedades del proyecto en el div
        //         const proyectoDetalleDiv = document.querySelector('.proyecto__detalle');
        //         proyectoDetalleDiv.innerHTML = `
        //         <div class="proyecto__banner" style="background-Image: url(${imagen})"></div>
        //         <div class="proyecto__info">
        //             <h4 class="proyecto__nombre">${nombre}</h4>
        //             <p class="proyecto__detalles">${descripcion}</p>
        //             <div class="proyecto__tecnologias">
                        
        //             </div><!-- PROYECTO TECNOLOGIAS -->
        //             <div class="proyecto__links">
        //                 <div class="link__git">
        //                     <a id="${id}" class="github" href="javascript:void(0);"><i class="bi bi-info-circle-fill"></i></a>
        //                 </div>
        //              <div class="link__link">
        //                     <a class="link" href=""><i class="bi bi-link"></i></a>
        //                 </div>
        //             </div><!-- PROYECTO LINKS -->
        //         </div><!-- PROYECTO INFO -->
        //         `;