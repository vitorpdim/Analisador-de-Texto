const textoInput = document.getElementById('texto');
const analisarBtn = document.getElementById('analisar');
const limparBtn = document.getElementById('limpar');
const resultados = document.getElementById('resultados');
const emptyState = document.getElementById('empty-state');
const contadorElement = document.getElementById('contador');
const textoFormatadoElement = document.getElementById('texto-formatado');
const totalCharsElement = document.getElementById('total-chars');
const porcentagemElement = document.getElementById('porcentagem');

let textoAtual = '';
let contadorVogais = 0;
let textoFormatado = '';

// event listeners
textoInput.addEventListener('input', atualizarEstadoBotao);
analisarBtn.addEventListener('click', analisarTexto);
limparBtn.addEventListener('click', limparTudo);

// func p verificar se é vogal
function ehVogal(char) {
    return ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'].includes(char);
}

// func p atualizar estado do botão
function atualizarEstadoBotao() {
    const texto = textoInput.value.trim();
    analisarBtn.disabled = !texto;
}

// func p analisar o texto
function analisarTexto() {
    textoAtual = textoInput.value;
    
    if (!textoAtual.trim()) {
        return;
    }

    let contador = 0;
    let formatado = '';

    // processa cada caractere
    for (let i = 0; i < textoAtual.length; i++) {
        const char = textoAtual[i];
        
        // conta vogais
        if (ehVogal(char)) {
            contador++;
        }

        // formata o texto com separadores
        if (i === textoAtual.length - 1) {
            formatado += char;
        } else {
            formatado += char + ' - ';
        }
    }

    // atualiza variáveis globais
    contadorVogais = contador;
    textoFormatado = formatado;
    exibirResultados();
}

// func p exibir os resultados
function exibirResultados() {
    contadorElement.textContent = contadorVogais;
    textoFormatadoElement.textContent = textoFormatado;
    totalCharsElement.textContent = textoAtual.length;
    
    // calcula porcentagem
    const porcentagem = textoAtual.length > 0 
        ? Math.round((contadorVogais / textoAtual.length) * 100) 
        : 0;
    porcentagemElement.textContent = porcentagem + '%';
    resultados.classList.remove('hidden');
    emptyState.classList.add('hidden');
}

// func p limpar tudo
function limparTudo() {
    textoInput.value = '';
    textoAtual = '';
    contadorVogais = 0;
    textoFormatado = '';
    
    // esconde resultados e mostra estado vazio
    resultados.classList.add('hidden');
    emptyState.classList.remove('hidden');
    atualizarEstadoBotao();
}


document.addEventListener('DOMContentLoaded', function() {
    atualizarEstadoBotao();
    
    textoInput.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    textoInput.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});

emptyState.classList.remove('hidden');