var faturamentoSP = 67836.43
var faturamentoRJ = 36678.66
var faturamentoMG = 29229.88
var faturamentoES = 27165.48
var faturamentoOutros = 19849.53

var total = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros

function percent (parcial, total){
    return (100 * parcial) / total
}

console.log(`A porcentagem de São Paulo é: ${percent(faturamentoSP,total)}%`)
console.log(`A porcentagem do Rio de Janeiro é: ${percent(faturamentoRJ,total)}%`)
console.log(`A porcentagem de Minas Gerais é: ${percent(faturamentoMG,total)}%`)
console.log(`A porcentagem de Espirito Santo é: ${percent(faturamentoES,total)}%`)
console.log(`A porcentagem de outros estados é: ${percent(faturamentoOutros,total)}%`)


