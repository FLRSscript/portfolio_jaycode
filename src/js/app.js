
const listaProyectos = () => fetch('https://raw.githubusercontent.com/jaycode404/proyectosAPI/main/db.json').then(respuesta => respuesta.json());

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

    const enlace = document.createElement('a');
    enlace.href = 'javascript:void(0);';
    enlace.className = 'enlace';

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
                    <a id="" class="github" href="javascript:void(0);"><i class="bi bi-info-circle-fill"></i></a>
                </div>
                <div class="link__link">
                    <a class="link" href="${link}" target="_blank"><i class="bi bi-link"></i></a>
                </div>
            </div><!-- PROYECTO LINKS -->
        </div><!-- PROYECTO INFO -->
    `;

    proyectoCard.innerHTML = contenido;
    enlace.append(proyectoCard);
    
    enlace.addEventListener('click', () => {
        redirigirProyecto(id, nombre, imagen, descripcion, tecnologias, info, link);
    });
    // Agregar evento de clic al enlace con ID
    const enlaceProyecto = proyectoCard.querySelector('.github');
    enlaceProyecto.addEventListener('click', () => {
        redirigirProyecto(id, nombre, imagen, descripcion, tecnologias, info, link);
    });
  

    return enlace;
};

listaProyectos().then(data => {
    const contenedorProyectos = document.querySelector('.proyectos__contenedor');
    let contador = 0;

    data.forEach(({ id, nombre, imagen, descripcion, tecnologias, info, link }) => {
        if (contador < 3) {
            const proyecto = mostrarProyecto(id, nombre, imagen, descripcion, tecnologias, info, link);
            contenedorProyectos.appendChild(proyecto);
            contador++;
        }
    });
});


listaProyectos().then(data => {
    data.forEach(({ id, nombre, imagen, descripcion, tecnologias, info, link }) => {

        const contenedorProyectos = document.querySelector('.proyectos__contenedortodos');
        const proyecto = mostrarProyecto(id, nombre, imagen, descripcion, tecnologias, info, link);


        contenedorProyectos.appendChild(proyecto);

    })
})

// Función para crear un objeto Typed cuando el elemento esté en el viewport
function createTypedWhenVisible(selector, options) {
    const element = document.querySelector(selector);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Crear el objeto Typed cuando el elemento sea visible
                new Typed(selector, options);
                observer.unobserve(element); // Dejar de observar una vez que se crea el objeto Typed
            }
        });
    });

    observer.observe(element);
}

// Llamadas para crear los objetos Typed cuando los elementos sean visibles
createTypedWhenVisible('.typed', {
    strings: ['PORTAFOLIO', 'PROYECTOS', 'SKILLS', 'FORMACIÓN'],
    typeSpeed: 100,
    startDelay: 40,
    backSpeed: 60,
    smartBackspace: true,
    shuffle: false,
    backDelay: 190,
    loop: true,
    loopCount: true,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
});

createTypedWhenVisible('.typed2', {
    strings: ['Personalidad geek, disfruto de aprender sobre tecnología y computadoras. Llevo más de un año en Desarrollo Web, tomando cursos y construyendo aplicaciones para llevar a la realidad lo aprendido. Busco aprender nuevas tecnologías y reforzar las que conozco. Interesado en ocupar un lugar en el campo laboral de la programación.'],
    typeSpeed: 1,
    startDelay: 0,
    backSpeed: 0,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: false,
    loopCount: false,
    showCursor: false,
    cursorChar: '|',
    contentType: 'html',
});

createTypedWhenVisible('.typed3', {
    strings: ['jaycode404@gmail.com'],
    typeSpeed: 50,
    startDelay: 3,
    backSpeed: 0,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: false,
    loopCount: false,
    showCursor: false,
    cursorChar: '|',
    contentType: 'html',
});

createTypedWhenVisible('.typed4', {
    strings: ['Jaycode'],
    typeSpeed: 100,
    startDelay: 300,
    backSpeed: 0,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: false,
    loopCount: false,
    showCursor: false,
    cursorChar: '|',
    contentType: 'html',
});
