// Selecionar o botão e o container da paleta
const generateButton = document.getElementById('generate');
const paletteContainer = document.getElementById('palette');

// Função para gerar uma cor aleatória
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Função para gerar a paleta de cores
function generatePalette() {
    paletteContainer.innerHTML = ''; // Limpar paleta atual
    for (let i = 0; i < 5; i++) { // Gerar 5 cores
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        const newColor = generateRandomColor();
        colorBox.style.backgroundColor = newColor;
        paletteContainer.appendChild(colorBox);
    }
}

// Adicionar evento ao botão
generateButton.addEventListener('click', generatePalette);

// Gerar uma paleta ao carregar a página
generatePalette();
