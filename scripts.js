let nome = document.querySelector(".nome-personagem");
let personagem = document.querySelector(".personagem");

function escolherPersonagem(nomePersonagem, imagemPersonagem, cor) {

    nome.innerHTML = nomePersonagem
    personagem.src = imagemPersonagem
    nome.style.color = cor
}