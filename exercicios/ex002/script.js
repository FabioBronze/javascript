function verificar(){
    let data = new Date();
    let atual = data.getFullYear();

    let ano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (ano.value.length == 0 || Number(ano.value) > ano){
        alert('Verifique os dados e tente novamente!')
    }else{
        let sex = document.getElementsByName('radsex')
        let idade = atual - Number(ano.value)
        let genero = ''

        let img = document.createElement('img')
        img.setAttribute('id', 'foto') //É como se fosse à mão ao HTML e atribuisse uma img como o id = foto

        if (sex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'img/foto-bebe-m.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'img/foto-jovem-m.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'img/foto-adulto-m.png')
            } else{
                //Idoso
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }
            
        }else if (sex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'img/foto-bebe-f.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'img/foto-jovem-f.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'img/foto-adulto-f.png')
            } else{
                //Idoso
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}