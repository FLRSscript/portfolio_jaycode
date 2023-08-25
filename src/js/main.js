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
