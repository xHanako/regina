// Obtenemos elementos
const selectIdioma = document.getElementById('idioma-select');
const btnComenzar = document.getElementById('btn-comenzar');

btnComenzar.addEventListener('click', () => {
    const urlIdioma = selectIdioma.value;
    if (!urlIdioma) {
        alert('Por favor seleccione un idioma antes de continuar.');
        return;
    }
    // Redirige a la página de la experiencia según idioma elegido
    window.location.href = '../experiencias/' + urlIdioma;
});
