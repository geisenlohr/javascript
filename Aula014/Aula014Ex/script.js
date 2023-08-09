function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 14
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        // Bom dia
        img.src = 'manhã.png'
        document.body.style.background = '#D8D8D6'
    }else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#F3933B'
    } else {
        // Boa noite
        img.src = 'noite.png'
        documento.body.style.background = '#0E2748'
    }
}