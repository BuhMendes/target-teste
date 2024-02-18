const dadosJson = require("./dados1.json")
console.table(dadosJson)

function acharMaior(dadosJson){
    var maior = 0
    for (let index = 0; index < dadosJson.length; index++) {
        if(dadosJson[index].valor > maior){
            maior = dadosJson[index].valor
        }
    }
    return maior
}

function acharMenor(dadosJson){
    var menor = Infinity
    for (let index = 0; index < dadosJson.length; index++) {
        const elementoAtual = dadosJson[index].valor 
        if(elementoAtual < menor && elementoAtual !== 0){
            menor = elementoAtual
        }
    }
    return menor
}

function acharMedia(dadosJson){
    var soma = 0
    var diaMes = 0
    for (let index = 0; index < dadosJson.length; index++){
        const elementoAtual = dadosJson[index].valor 
        if(elementoAtual !== 0){
            soma = soma + elementoAtual
            diaMes = diaMes + 1
        }
    }
    return soma / diaMes
}

var media = acharMedia(dadosJson)

console.log(`O maior valor de faturamento mensal foi ${acharMaior(dadosJson)}`)
console.log(`O menor valor de faturamento mensal foi ${acharMenor(dadosJson)}`)
console.log(`Média mensal de faturamento foi ${media}`)
console.log("Os dias cujo o faturamneto diário foi superior a média mensal foram: ")

for (let index = 0; index < dadosJson.length; index++) {
    const element = dadosJson[index]
    if(element.valor > media){
        console.log(element)
    }
    
}