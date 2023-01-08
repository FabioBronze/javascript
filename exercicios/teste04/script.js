function contar() {
    let txt = document.querySelector('#itxt')
    let res = document.querySelector('#res')

    if (txt.value.length == 0) {
        alert('ERRO AO INTRODUZIR VALOR')
    } else {
        let tab = Number(txt.value)
        res.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${tab} X ${c} = ${tab * c}`
            res.appendChild(item)
        }
    }
}