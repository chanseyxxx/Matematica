// Armazena o último botão clicado
let ultimoBotaoClicado = null;

// Função para lidar com o clique nos botões
function handleButtonClick(event) {
  ultimoBotaoClicado = event.target.id; // Armazena o id do botão clicado

 console.log("Último botão clicado:", ultimoBotaoClicado);  
}

// Adiciona um event listener para cada botão
document.getElementById("botao1").addEventListener("click", handleButtonClick);
document.getElementById("botao2").addEventListener("click", handleButtonClick);
document.getElementById("botao3").addEventListener("click", handleButtonClick);
document.getElementById("botao4").addEventListener("click", handleButtonClick);
