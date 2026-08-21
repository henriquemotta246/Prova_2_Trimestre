// =========================================================
// ARQUIVO DE APOIO - NÃO HÁ UMA SOLUÇÃO PRONTA AQUI.
// Desenvolva a lógica JavaScript da tarefa.
// =========================================================

// Sugestão de organização:
// 1. Selecione os elementos necessários.
// 2. Crie as variáveis de estado, se necessário.
// 3. Adicione os eventos.
// 4. Implemente as funções.
// 5. Teste cada requisito individualmente.

/*2-função para alterar a cor do fundo do canvas. adicionar um seletor de cores no HTML e um evento para alterar a cor do fundo do canvas
 a cor es selecionadas devera alterar dinamicamente algum elemento da interface sem recarregar a pagina */


const status = document.getElementById("status");
const toggleBtn = document.getElementById("toggleBtn");
const resetBtn = document.getElementById("resetBtn");
const seletorCor = document.getElementById("seletor-cor");
const canvas = document.getElementById("tela");

const ctx = canvas.getContext("2d");


let ligado = false;
const corInicial = "#2563eb";

s
function desenharCanvas() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    const cor = seletorCor.value;


    ctx.fillStyle = ligado ? cor : "#1f2937";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(300, 200, 80, 0, Math.PI * 2);
    ctx.fillStyle = ligado ? "#ffffff" : "#6b7280";
    ctx.fill();

 
    ctx.fillStyle = ligado ? cor : "#ffffff";
    ctx.font = "bold 32px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    if (ligado) {
        ctx.fillText("EQUIPAMENTO LIGADO", 300, 200);
    } else {
        ctx.fillText("EQUIPAMENTO DESLIGADO", 300, 200);
    }
}

function atualizarEstado() {

    if (ligado) {
        status.textContent = "LIGADO";
        status.className = "status ligado";

        toggleBtn.textContent = "DESLIGAR";

        document.body.classList.add("equipamento-ligado");
    } else {
        status.textContent = "DESLIGADO";
        status.className = "status desligado";

        toggleBtn.textContent = "LIGAR";

        document.body.classList.remove("equipamento-ligado");
    }

    desenharCanvas();
}
 //BOTOES
toggleBtn.addEventListener("click", function () {
    ligado = !ligado;
    atualizarEstado();
});

// Seletor de cor
seletorCor.addEventListener("input", function () {
    desenharCanvas();
});

// Botão RESETAR
resetBtn.addEventListener("click", function () {

    // Volta ao estado inicial
    ligado = false;

    // Volta à cor inicial
    seletorCor.value = corInicial;

    // Atualiza toda a interface
    atualizarEstado();
});

// Inicializa a página
atualizarEstado();

