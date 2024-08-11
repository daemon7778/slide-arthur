    //-passo 1 - pegar o elemento do html dos botoes
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes")

    //passo 2
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
    //passo 3
        desativarBotaoSelecionado();
    //passo 4
        MarcarBotaoSelecionado(botao);
    //- passo 5 - ensonder a imagem anteriorente selecionada
        esconderImagemAtiva();
        //- passo 6 - fazer aparecer a imagem correspondente ao botao clicado
       mostrarImagemDefundo(indice);
       //passo 7 - enconder as informaçoes da imagem anteriormente selecionada
       esconderinformacoesativas();

       //passo 8
       mostrarInformacoes(indice);
    });
});

function MarcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderinformacoesativas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDefundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
