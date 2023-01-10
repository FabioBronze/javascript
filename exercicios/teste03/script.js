function contar() {
    let inicio = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] INPUT INVALIDO')
    } else {
        res.innerHTML = 'Contador: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0) {
            alert('[ERRO] Considerando PASSO 1')
            p = 1
        }

        if(1 < f) {
            for(let c = i; c <= f; c+=p) {
                res.innerHTML += ` ${c} `   
            }
        } else {
            for (let c = i; c >= f; c-=p) {
                res.innerHTML += ` ${c} `
            }
        }   
    }
}