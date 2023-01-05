function contar() {
    let num = document.querySelector('#itxt')
    let res = document.querySelector('#res')

    if(num.value.length == 0){ 
       alert('Por favor digite um número!')
    } else {
        let n = Number(num.value)
        res.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option') // pq dentro do select tem de ser ter 'option'
            item.text = `${n} x ${c} = ${n * c}`
            res.appendChild(item)
        }
    }
}