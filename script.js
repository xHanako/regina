document.addEventListener("DOMContentLoaded", () => {
    const selectIdioma = document.getElementById('idioma-select');
    const btnComenzar = document.getElementById('btn-comenzar');

    if (btnComenzar && selectIdioma) {
        btnComenzar.addEventListener('click', () => {
            const urlIdioma = selectIdioma.value;
            if (!urlIdioma) {
                alert('Por favor seleccione un idioma antes de continuar.');
                return;
            }
            window.location.href = 'experiencias/' + urlIdioma;
        });
    }

    // MODAL TRANSCRIPCIÓN

    const modal = document.getElementById("modal-transcripcion");
    const btnAbrir = document.getElementById("abrir-modal");
    const btnCerrar = document.querySelector(".close-modal");

    if (btnAbrir && modal && btnCerrar) {
        
        btnAbrir.onclick = function(e) {
            e.preventDefault(); 
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        }

        btnCerrar.onclick = function() {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        }
    }
});