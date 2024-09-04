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

function generatePalette() {
    paletteContainer.innerHTML = ''; // Limpar paleta atual
    for (let i = 0; i < 5; i++) { // Gerar 5 cores
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        const newColor = generateRandomColor();
        colorBox.style.backgroundColor = newColor;

        // Criar o span para exibir o código da cor
        const colorText = document.createElement('span');
        colorText.className = 'color-text';
        colorText.textContent = newColor;
        colorBox.appendChild(colorText);

        // Adicionar evento de clique para copiar a cor
        colorBox.addEventListener('click', () => {
            copyToClipboard(newColor);
        });

        paletteContainer.appendChild(colorBox);
    }
}

// Função para copiar o código da cor para a área de transferência
function copyToClipboard(color) {
    const tempInput = document.createElement('input');
    tempInput.value = color;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert(`Cor ${color} copiada!`);
}

// Adicionar evento ao botão
generateButton.addEventListener('click', generatePalette);

// Gerar uma paleta ao carregar a página
generatePalette();
