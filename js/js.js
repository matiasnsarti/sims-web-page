const abrirMenuMobileBtn = document.querySelector('#boton-menu-mobile');
const cerrarMenu = document.querySelector('.menu-oculto-mobile');
const abrirBtn = document.querySelector('.abrir-menu-mobile-flex');
const cerrarBtn = document.querySelector('.cerrar-menu-mobile-none');

abrirMenuMobileBtn.addEventListener('click', function() {
    cerrarMenu.classList.toggle('mostrar-menu-mobile');
    abrirBtn.classList.toggle('abrir-menu-mobile-none');
    cerrarBtn.classList.toggle('cerrar-menu-mobile-flex');
});