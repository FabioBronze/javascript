let num = [1, 5, 7, 9, 10]
num.push(11)

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let pos = num.indexOf(7)
if(pos == -1){
    console.log('Valor não encontrado!')
} else {
    console.log(`O valor 7 está na posição ${pos}`)
}