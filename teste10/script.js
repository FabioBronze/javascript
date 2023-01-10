let amigo = {nome:'José', 
sexo:'M', 
peso:86.1,
engordar(p){
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)