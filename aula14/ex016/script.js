function contar() {
    // Recupera os valores dos campos de entrada
    var inicio = parseInt(document.getElementById('inicio').value);
    var fim = parseInt(document.getElementById('fim').value);
    var passo = parseInt(document.getElementById('passo').value);
    // Seleciona o elemento onde a mensagem será exibida
    var msg = document.getElementById('msg');
    // Seleciona o elemento onde a contagem será exibida
    var contadorParagrafo = document.getElementById('contador');

    // Mostra a seção de contagem
    document.getElementById('contagem').style.display = 'block';

    // Atualiza a mensagem para "Contando..."
    msg.innerHTML = '';

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
        alert('Por favor, preencha todos os campos corretamente.'); 
        return;
    }

    if (passo <= 0) {
        msg.innerHTML = 'O passo deve ser maior que zero.';
        return;
    }

    var contador = inicio;

    function loop() {
        if (contador <= fim) {
            contadorParagrafo.innerHTML += contador + "👉"; // Adiciona o número ao parágrafo
            contador += passo;
            setTimeout(loop, 1000); // Atraso de 1000 milissegundos (1 segundo)
        }
    }

    loop();
}
