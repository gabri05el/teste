const contato = document.getElementById("contato");
const nome = document.getElementById("contato--dados-nome");
const celular = document.getElementById("contato--dados-celular");
const email = document.getElementById("contato--dados-email");
const assunto = document.getElementById("contato--dados-assunto");

contato.addEventListener("submit", (evento) => {
    evento.preventDefault();
    checagemDoInputs();
});

function checagemDoInputs() {
    const valorDeNome = nome.value.trim();

    if(valorDeNome === "") {
        erroNaValidacao(nome, "Por favor preencha esse campo");
    }else if(valorDeNome.length < 3) {
        erroNaValidacao(nome, "Esse campo nessecita ter no minímo 3 letras");
    }else {
        certaValidacao(nome);
    }
}

function erroNaValidacao(input, menssagem) {
    const contatoInputs = input.parentElement;
    const small = contatoInputs.quarySelector("small");
    small.innerText = menssagem;
    contatoInputs.className = 'main__contato_campo_dados errado';
}

function certaValidacao(input) {
    const contatoInputs = input.parentElement;
    contatoInputs.className = 'main__contato_campo_dados certo';
}
