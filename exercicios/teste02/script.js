function verificar() {
    let data = new Date();
    let atual = data.getFullYear();

    let txtano = document.querySelector('#txtano')
    let mas = document.querySelector('#mas')
    let fem = document.querySelector('#fem')
    let res = document.querySelector('#res')

    if (txtano.value.length == 0 || Number(txtano.value) > atual) {
        alert('[ERRO] INPUT INVALIDO')
    } else {
        let idade = atual - Number(txtano.value)
        let img = document.createElement('img')
        let genero = ''

        if (mas.checked) {
            if (idade >= 0 && idade < 12) {
                genero = 'Criança'
                img.setAttribute('src', 'img/foto-bebe-m.png')
            } else if (idade < 21) {
                genero = 'Jovem'
                img.setAttribute('src', 'img/foto-jovem-m.png')
            } else if (idade < 50) {
                genero = 'Adulto'
                img.setAttribute('src', 'img/foto-adulto-m.png')
            } else{
                genero = 'Idoso'
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }
        } else if (fem.checked){
            if(idade >= 0 && idade < 10){
                genero = 'Criança'
                img.setAttribute('src', 'img/foto-bebe-f.png')
            } else if (idade < 21){
                genero = 'Jovem'
                img.setAttribute('src', 'img/foto-jovem-f.png')
            } else if(idade < 50){
                genero = 'Adulta'
                img.setAttribute('src', 'img/foto-adulto-f.png')
            } else{
                genero = 'Idosa'
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}