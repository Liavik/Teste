function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

//TROCA A COR DA PAGINA DEPENDENDO DO HORARIO QUE FOR
    if (hora >= 0 && hora < 12) {
        img.src = ''
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora <= 18) {
        img.src = 'Tarde.jpg'
        document.body.style.background = '#b9846f'

    } else {
        img.src = 'Noite.jpg'
        document.body.style.background = '#515154'
    }
}
