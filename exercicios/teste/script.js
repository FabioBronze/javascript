function carregar(){
    let data = new Date();
    let hora = data.getHours();

    let msg = document.getElementById('msg');
    let imagem = document.getElementById('imagem');
    let msg2 = document.getElementById('msg2');

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora > 0 && hora <= 12) {
        imagem.src = 'img/dia.jpg'
        document.body.style.background = '#e2cd9f'
        msg2.innerHTML = 'Bom dia!'
    } else if (hora >= 13 && hora <= 18){
        imagem.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'
        msg2.innerHTML = 'Boa Tarde!'
    } else{
        imagem.src = 'img/noite.jpg'
        document.body.style.background = '#515154'
        msg2.innerHTML = 'Boa Noite!'
    }
}