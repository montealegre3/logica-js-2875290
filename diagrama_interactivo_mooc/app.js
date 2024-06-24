document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById('btnAnterior');
    const nextBtn = document.getElementById('btnSiguiente');
    const images = document.querySelectorAll('.galeria .lista-imagenes img');

    let currentIndex = 0;
    const totalImages = images.length;

    // Función que muestra la imagen actual
    function showImage(index) {
        // Ocultar todas las imágenes
        images.forEach(image => {
            image.style.display = 'none';
        });

        // Mostrar la imagen correspondiente al index
        images[index].style.display = 'block';
    }

    // Muestra la primera imagen al cargar la página
    showImage(currentIndex);

    // Evento click botón Siguiente
    nextBtn.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= totalImages) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    });

    // Evento click botón Anterior
    prevBtn.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalImages - 1;
        }
        showImage(currentIndex);
    });
})

