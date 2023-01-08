function verificar (){
    let data = new Date();
    let atual = data.getFullYear();

    let txtano = document.querySelector('#txtano');
    let mas = document.querySelector('#mas');
    let fem = document.querySelector('#fem');
    let res = document.querySelector('#res');

    if (txtano.value.length == 0 || Number(txtano.value) > atual) {
        alert('[ERRO] INPUT INVÁLIDO')
    } else {
        let idade = atual - Number(txtano.value);
        let genero = ''

        let img = document.createElement('img')

        if (mas.checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'img/foto-bebe-m.png')
            } else if (idade <= 21) {
                img.setAttribute('src', 'img/foto-jovem-m.png')
            } else if (idade <= 50) {
                img.setAttribute('src', 'img/foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }
        }

        if (fem.checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'img/foto-bebe-f.png')
            } else if (idade <= 21) {
                img.setAttribute('src', 'img/foto-jovem-f.png')
            } else if (idade <= 50) {
                img.setAttribute('src', 'img/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}