let num = [5,8,2,9,3]

// adiciona o valor no índice selecionado
num[3]=6

//Adiciona novo valor no ultimo vetor
num.push(7)

// quantidade de indices sem parenteses
num.length

// Coloca em ordem crescente
//num.sort()


console.log(`Nosso vetor é o [${num}]`)
console.log(num.length)

/*
let pos = 0 
for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// num.indexOf() indica em qual indice está o valor selecionado
let index = num.indexOf(8)
//quando não tem o valor , retorna -1
if(index == -1){
    console.log('O valor não foi encontrado')
}else {
    console.log(`O valor está na posição ${index}`)
}
