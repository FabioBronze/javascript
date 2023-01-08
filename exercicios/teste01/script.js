function carregar() {
    let data = new Date()
    let hora = data.getHours()
    let res = document.querySelector('#msg')
    let imagem = document.querySelector('#imagem')

    res.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora <= 12) {
        imagem.src = 'img/dia.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        imagem.src = 'img/noite.jpg'
        document.body.style.background = '#515154'
    }
}