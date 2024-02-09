function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = 1
    var minutosFormatados = min < 10 ? '0' + min : min; // Adiciona um zero à esquerda se o número de minutos for menor que 10
    msg.innerHTML = `Agora são ${hora}:${minutosFormatados}`;
    

    if (hora >= 0 && hora < 12) {
        imagem.src = 'imagens/fotomanha.jpg'
        document.body.style.background = 'rgb(209, 231, 243)'
    } else if (hora >= 12 && hora <= 18){
        imagem.src = 'imagens/fototarde.jpg'
        document.body.style.background = 'rgb(255, 148, 0)'
    } else {
        imagem.src = 'imagens/fotonoite.jpg'
        document.body.style.background = 'rgb(0, 30, 40)'
    }
}

