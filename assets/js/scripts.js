document.getElementById('giftButton').addEventListener('click', function () {
    // Mostrar la imagen de girasoles en pantalla completa
    const sunflowerContainer = document.getElementById('sunflowerContainer');
    sunflowerContainer.classList.add('active');

    // Reproducir la música de fondo
    const music = document.getElementById('backgroundMusic');
    music.play();
});
