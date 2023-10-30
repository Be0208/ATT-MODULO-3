// Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de
// notas disponíveis, mantendo um estoque de cédulas para cada valor. Os
// clientes do banco utilizam os caixas eletrônicos para efetuar retiradas de
// um certo número inteiro de GrowCoins.
// Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
// desejado pelo cliente, determine o número de cada uma das notas
// necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
// retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
// Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
// GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00

let valor = Number(prompt("Digite o valor que deseja sacar:"))
let nota50 = 0
let nota10 = 0
let nota5 = 0
let nota1 = 0
while (valor > 0) { 
    if (valor >= 50) {
        valor -= 50
        nota50++
    } else if (valor >= 10) {
        valor -= 10
        nota10++
    } else if (valor >= 5) {
        valor -= 5
        nota5++
    } else if (valor >= 1) {
        valor -= 1
        nota1++
    }
}
document.write('notas de GC$50,00: ' + nota50 + '<br>')
document.write('notas de GC$10,00: ' + nota10 + '<br>')
document.write('notas de GC$5,00: ' + nota5 + '<br>')
document.write('notas de GC$1,00: ' + nota1 + '<br>')