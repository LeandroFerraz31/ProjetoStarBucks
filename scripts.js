let imagem = document.querySelector(".starbucks")
let circulo = document.querySelector(".circulo")
let estilo = document.querySelector(".estilo")



function trocaImagem(endereco) {
    imagem.src = endereco
}

function trocaCor(cor) {
    circulo.style.background = cor
}

function trocaCor(cor) {
    estilo.style.color = cor
}