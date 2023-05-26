let imagem = document.querySelector(".starbucks")
let circulo = document.querySelector(".circulo")
let span = document.querySelector("span");



function trocaImagem(endereco) {
    imagem.src = endereco
}

function trocaCor(cor) {
    circulo.style.background = cor
    span.style.color = cor;
}
imagem.addEventListener("click", function() {
    trocaImagem("caminho_da_imagem.png", "#333");
  });