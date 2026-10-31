const btn = document.getElementById("btn-confirma");

function aprBtn() {
    btn.classList.remove("main__botao_off");
    btn.classList.add("main__botao");
}

const contPausa = document.getElementById("cont-pausa");
const header = document.getElementById("header");
const main = document.getElementById("main");

btn.addEventListener("click", () => {
    /* Tela de 6.5s */
    
    /* Tela de Continuar - Pausar */
    contPausa.classList.remove("continuar__pausar_div_off");
    contPausa.classList.add("continuar__pausar_div");
    header.classList.remove("header");
    header.classList.add("header__off");
    main.classList.add("desfoque");
    btn.classList.add("main__botao_off");
})

const altA = document.getElementById("alternativa-a");

altA.addEventListener("click", () => {
    altA.classList.add("main__alternativa_selecionada");
    altB.classList.remove("main__alternativa_selecionada");
    altC.classList.remove("main__alternativa_selecionada");
    altD.classList.remove("main__alternativa_selecionada");
    aprBtn();
});

const altB = document.getElementById("alternativa-b");

altB.addEventListener("click", () => {
    altB.classList.add("main__alternativa_selecionada");
    altA.classList.remove("main__alternativa_selecionada");
    altC.classList.remove("main__alternativa_selecionada");
    altD.classList.remove("main__alternativa_selecionada");
    aprBtn();
});

const altC = document.getElementById("alternativa-c");

altC.addEventListener("click", () => {
    altC.classList.add("main__alternativa_selecionada");
    altA.classList.remove("main__alternativa_selecionada");
    altB.classList.remove("main__alternativa_selecionada");
    altD.classList.remove("main__alternativa_selecionada");
    aprBtn();
});

const altD = document.getElementById("alternativa-d");

altD.addEventListener("click", () => {
    altD.classList.add("main__alternativa_selecionada");
    altA.classList.remove("main__alternativa_selecionada");
    altB.classList.remove("main__alternativa_selecionada");
    altC.classList.remove("main__alternativa_selecionada");
    aprBtn();
});
