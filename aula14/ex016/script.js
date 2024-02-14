function contar() {
    // Recupera os valores dos campos de entrada
    var inicio = parseInt(document.getElementById('txti').value)
    var fim = parseInt(document.getElementById('txtf').value)
    var passo = parseInt(document.getElementById('txtp').value)


    // Seleciona o elemento onde a mensagem será exibida
    var msg = document.getElementById('res')
    


    

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
        alert('Por favor, preencha todos os campos corretamente.')
        
    } else {
        // Atualiza a mensagem para "Contando..."
        msg.innerHTML = 'Contando: <br>' 
        if(passo <= 0){
            alert('Passo inválido! Digite um passo válido!')
            msg.innerHTML = 'Preparando a contagem...'
            return
            
        }
        if (inicio < fim){
            // contagem crescente
            for(var c = inicio; c <= fim; c += passo){
                msg.innerHTML += ` ${c}  👉 `
            }
            // Contagem regressiva
        }else {
            for(var c = inicio; c >= fim; c-= passo){
                msg.innerHTML += ` ${c}  👉 `
            }
            
            
        }
        msg.innerHTML += `\u{1F3C1}` 
    }

    /*
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

    loop();*/
}
