var readline = require ('readline')

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question("Digite uma palavra:", function(answer){
    console.log("A palavra invertida é: " + reverseString(answer))
    leitor.close()
})

function reverseString(str){
    var novaString = ""
    for (let index = str.length -1; index >= 0 ; index--) {
        novaString += str[index]
    }
    return novaString
}
