function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem01')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.<br>`  
    if (hora >= 0 && hora < 12) {
         msg.innerHTML += 'BOM DIA!'
        img.src = 'imagemmanha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML += 'BOA TARDE!'
        img.src = 'imagemtarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML += 'BOA NOITE!' 
        img.src = 'imagemnoite.jpg'
        document.body.style.background = '#515154'
    }
}
