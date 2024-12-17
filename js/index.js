const avatarGoku = document.getElementById('avatar-goku');
const sectionPersonagensGoku = document.querySelector('.personagens-goku');
const sectionSelecionadoGoku = document.querySelector('.personagem-selecionado-goku');

const avatarVegetta = document.getElementById('avatar-vegetta');
const sectionPersonagensVegetta = document.querySelector('.personagens-vegetta');
const sectionSelecionadoVegetta = document.querySelector('.personagem-selecionado-vegetta');

const avatarMajinboo = document.getElementById('avatar-majinboo');
const sectionPersonagensMajinboo = document.querySelector('.personagens-majinboo');
const sectionSelecionadoMajinboo = document.querySelector('.personagem-selecionado-majinboo');

avatarGoku.addEventListener("click", () => {
    sectionPersonagensGoku.style.display = "block";
    sectionSelecionadoGoku.style.display = "block";

    sectionPersonagensVegetta.style.display = "none";
    sectionSelecionadoVegetta.style.display = "none";

    sectionPersonagensMajinboo.style.display = "none";
    sectionSelecionadoMajinboo.style.display = "none";
});

avatarVegetta.addEventListener("click", () => {
    sectionPersonagensVegetta.style.display = "block";
    sectionSelecionadoVegetta.style.display = "block";

    sectionPersonagensGoku.style.display = "none";
    sectionSelecionadoGoku.style.display = "none";

    sectionPersonagensMajinboo.style.display = "none";
    sectionSelecionadoMajinboo.style.display = "none";
});

avatarMajinboo.addEventListener("click", () => {
    sectionPersonagensMajinboo.style.display = "block";
    sectionSelecionadoMajinboo.style.display = "block";

    sectionPersonagensGoku.style.display = "none";
    sectionSelecionadoGoku.style.display = "none";

    sectionPersonagensVegetta.style.display = "none";
    sectionSelecionadoVegetta.style.display = "none";
});

const personagens = document.querySelectorAll('.personagem')
const imagensPersonagemGrande = document.querySelectorAll('.personagem-grande')

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado')

        alterarImagemPersonagemSelecionado(personagem);

        alterarNomePersonagemSelecionado(personagem);

        alterarDescricaoPersonagem(personagem);
        
    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    const descricaoPersonagem2 = document.getElementById('descricao-personagem-2');
    const descricaoPersonagem3 = document.getElementById('descricao-personagem-3');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    descricaoPersonagem2.innerText = personagem.getAttribute('data-description');
    descricaoPersonagem3.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    const nomePersonagem2 = document.getElementById('nome-personagem-2');
    const nomePersonagem3 = document.getElementById('nome-personagem-3');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
    nomePersonagem2.innerText = personagem.getAttribute('data-name');
    nomePersonagem3.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {

    const idPersonagem = personagem.attributes.id.value;
    
    imagensPersonagemGrande.forEach(imagemPersonagemGrande => {
        imagemPersonagemGrande.src = `./img/${idPersonagem}.png`;
    })
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}