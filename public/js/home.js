document.addEventListener('DOMContentLoaded', () => {

    // Verificar si 'darkMode' existe en localStorage al cargar
    localStorage.getItem('darkMode') === null ? localStorage.setItem('darkMode', 'false'):
    localStorage.getItem('darkMode') === 'true' && document.body.classList.add('dark-mode');

    // Escuchar el evento click en el botón para Toggle del modo oscuro
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    darkModeToggle.addEventListener('click', () => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        localStorage.setItem('darkMode', !isDarkMode ? 'true' : 'false');    
        document.body.classList.toggle('dark-mode', !isDarkMode);
    });

// ------------------------- Home menu ----------------------------
        
    const menu = document.getElementById('menu');
    const show = document.getElementById('show-users');
    const tables = document.getElementById('tables-container');
    const logo = document.querySelector('.logo.flexbox');
    const services = document.querySelector('.services');
    

    // Menu toggle
    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        menu.classList.toggle('hidden-animated');
        menuToggle.querySelector('.icon').textContent = menu.classList.contains('hidden-animated') ? '☰' : '✕';
    });

    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.add('hidden-animated');
            menuToggle.querySelector('.icon').textContent = '☰';
        }
    });
    //Cerrar menu lateral aside
    logo.addEventListener('click', (event) => {
        event.stopPropagation();
        document.querySelector('.aside').classList.toggle('scroll-x');
    });
    //desplegar servicios
    services?
    services.addEventListener('click', (event) => {
        event.stopPropagation();
        document.querySelector('.services-content').classList.toggle('hidden-animated');
    }):null;

    // Mostrar tabla de usuarios
    if(show){
    show.addEventListener('click', () => {
        tables.style.display = 'table';
        menu.classList.add('hidden');
        menuToggle.querySelector('.icon').textContent = '☰';
    });}

});

