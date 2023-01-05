function verificar() {
    let data = new Date();
    let atual = data.getFullYear();

    let ano = document.querySelector('#txtano')
    let res = document.getElementById('res')

    if (ano.value.length == 0 || Number(ano.value) > atual) {
        alert('[ERRO] Verifique os dados que colocou!')
    } else {
        let sex = document.getElementsByName('radsex')
        let idade = atual - Number(ano.value)
        let genero = ''
        let img = document.createElement('img') // Cria a tag img
        img.setAttribute('id', 'foto') //É como se fosse à mão ao HTML e atribuisse uma img como o id = foto

        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10){
                img.setAttribute('src', 'img/foto-bebe-m.png')
            } else if (idade <= 21){
                img.setAttribute('src', 'img/foto-jovem-m.png')
            } else if (idade <= 50){
                img.setAttribute('src', 'img/foto-adulto-m.png')
            }else {
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }
        }

        if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                img.setAttribute('src', 'img/foto-bebe-f.png')
            } else if (idade <= 21){
                img.setAttribute('src', 'img/foto-jovem-f.png')
            } else if (idade <= 50){
                img.setAttribute('src', 'img/foto-adulto-f.png')
            }else {
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}