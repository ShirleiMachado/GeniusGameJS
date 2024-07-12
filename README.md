```markdown
# Jogo da Memória - Genius

Este é um jogo da memória estilo "Genius" (também conhecido como "Simon Says") implementado com JavaScript vanilla, HTML e CSS.

## Descrição

O jogo gera uma sequência de cores que o jogador deve repetir. A cada nível, uma nova cor é adicionada à sequência. Se o jogador repetir a sequência corretamente, avança para o próximo nível. Caso contrário, o jogo reinicia.

## Funcionalidades

- Geração aleatória de sequência de cores.
- Verificação da sequência inserida pelo jogador.
- Incremento de nível com base no desempenho do jogador.
- Feedback visual para cada clique do jogador.

## Estrutura do Projeto
```

.
├── index.html
├── styles.css
└── script.js

````

- `index.html`: Estrutura HTML básica do jogo.
- `styles.css`: Estilos CSS para a interface do jogo.
- `script.js`: Lógica do jogo implementada em JavaScript.

## Como Jogar

1. Clique no botão "Iniciar" para começar o jogo.
2. Observe a sequência de cores que será exibida.
3. Repita a sequência clicando nas cores na mesma ordem.
4. A cada nível, uma nova cor será adicionada à sequência.
5. Se você errar a sequência, o jogo reiniciará.

## Como Executar

1. Faça o download ou clone este repositório.
2. Abra o arquivo `index.html` em um navegador web.

## Exemplo de Código

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Memória - Genius</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div id="red" class="color red"></div>
        <div id="blue" class="color blue"></div>
        <div id="yellow" class="color yellow"></div>
        <div id="green" class="color green"></div>
    </div>
    <button id="startButton">Iniciar</button>
    <script src="script.js"></script>
</body>
</html>
````

### CSS

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background-color: #f0f0f0;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-template-rows: repeat(2, 200px);
  gap: 10px;
}

.color {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  cursor: pointer;
  opacity: 0.8;
}

.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.yellow {
  background-color: yellow;
}

.green {
  background-color: green;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}
```

### JavaScript

```javascript
const colors = ["red", "blue", "yellow", "green"];
let gameSequence = [];
let userSequence = [];
let level = 0;

const startButton = document.getElementById("startButton");
const redButton = document.getElementById("red");
const blueButton = document.getElementById("blue");
const yellowButton = document.getElementById("yellow");
const greenButton = document.getElementById("green");

const buttons = {
  red: redButton,
  blue: blueButton,
  yellow: yellowButton,
  green: greenButton,
};

startButton.addEventListener("click", startGame);
redButton.addEventListener("click", () => handleUserInput("red"));
blueButton.addEventListener("click", () => handleUserInput("blue"));
yellowButton.addEventListener("click", () => handleUserInput("yellow"));
greenButton.addEventListener("click", () => handleUserInput("green"));

function startGame() {
  level = 0;
  gameSequence = [];
  userSequence = [];
  nextLevel();
}

function nextLevel() {
  level++;
  userSequence = [];
  const nextColor = colors[Math.floor(Math.random() * colors.length)];
  gameSequence.push(nextColor);
  displaySequence();
}

function displaySequence() {
  let delay = 500;
  gameSequence.forEach((color, index) => {
    setTimeout(() => {
      buttons[color].classList.add("active");
      setTimeout(() => buttons[color].classList.remove("active"), 300);
    }, delay * (index + 1));
  });
}

function handleUserInput(color) {
  userSequence.push(color);
  buttons[color].classList.add("active");
  setTimeout(() => buttons[color].classList.remove("active"), 300);

  if (userSequence.length === gameSequence.length) {
    if (userSequence.every((val, index) => val === gameSequence[index])) {
      setTimeout(nextLevel, 1000);
    } else {
      alert("Você perdeu! Tente novamente.");
      startGame();
    }
  }
}
```

## Autor

- [Shirlei](https://github.com/ShirleiMachado)

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.

```

Esse README.md fornece uma visão geral do projeto, explica como jogar e como executar o jogo, e inclui exemplos de código para referência.
```
