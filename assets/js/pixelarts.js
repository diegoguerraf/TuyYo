const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Configuración del tamaño de los píxeles
const pixelSize = 5;

// Dimensiones del canvas
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// Colores para el girasol (centro marrón y pétalos amarillos)
const colors = {
    center: '#8B4513',  // Marrón
    petals: '#FFD700',  // Amarillo
    background: '#87CEEB'  // Azul cielo
};

// Dibuja el fondo (color azul cielo)
ctx.fillStyle = colors.background;
ctx.fillRect(0, 0, canvasWidth, canvasHeight);

// Información para las posiciones del centro y pétalos
const centerX = canvasWidth / 2;
const centerY = canvasHeight / 2;
const petalLength = 60;  // Longitud de los pétalos
const petalWidth = 20;   // Anchura de los pétalos
const centerRadius = 40;

// Dibuja los pétalos y el centro gradualmente
let petalIndex = 0;

function drawPixel(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, pixelSize, pixelSize);
}

// Función para dibujar los pétalos de forma alargada
function drawPetals() {
    const angleStep = Math.PI / 12;  // Paso angular para los pétalos
    const angle = petalIndex * angleStep;
    
    // Cálculo de la posición de los extremos del pétalo
    const startX = centerX + Math.cos(angle) * centerRadius;
    const startY = centerY + Math.sin(angle) * centerRadius;
    const endX = centerX + Math.cos(angle) * (centerRadius + petalLength);
    const endY = centerY + Math.sin(angle) * (centerRadius + petalLength);

    // Dibuja el pétalo alargado con varios píxeles
    for (let i = 0; i < petalLength / pixelSize; i++) {
        const x = startX + (endX - startX) * (i / (petalLength / pixelSize));
        const y = startY + (endY - startY) * (i / (petalLength / pixelSize));
        drawPixel(x, y, colors.petals);
    }

    petalIndex++;
    
    // Dibujar todos los pétalos gradualmente
    if (petalIndex < 24) {  // 24 pétalos distribuidos alrededor del centro
        setTimeout(drawPetals, 100);  // Ajusta la velocidad de la animación
    } else {
        drawCenter();
    }
}

// Función para dibujar el centro del girasol con más detalles
function drawCenter() {
    for (let x = -centerRadius; x < centerRadius; x += pixelSize) {
        for (let y = -centerRadius; y < centerRadius; y += pixelSize) {
            const distance = Math.sqrt(x * x + y * y);
            if (distance <= centerRadius) {
                drawPixel(centerX + x, centerY + y, colors.center);
            }
        }
    }
}

// Inicia el dibujo de los pétalos
drawPetals();

// Reproduce la música al iniciar la animación
const music = document.getElementById("backgroundMusic");
music.play();
