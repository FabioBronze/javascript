function contar() {
    let texto = document.querySelector('#itxt')
    let res = document.querySelector('#res')

    if (texto.value.length == 0) {
        alert('[ERRO] INPUT INVALIDO')
    } else {
        let num = Number(texto.value)
        res.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num} X ${c} = ${num*c}`
            res.appendChild(item)
        }
    }
}