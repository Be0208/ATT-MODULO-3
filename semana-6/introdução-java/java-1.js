// Notas e pesos
let nota1 = 80;
let nota2 = 90;
let nota3 = 75;

let peso1 = 0.3;
let peso2 = 0.4;
let peso3 = 0.3;

// Cálculo da média ponderada
let somaProdutos = nota1 * peso1 + nota2 * peso2 + nota3 * peso3;
let somaPesos = peso1 + peso2 + peso3;
let mediaPonderada = somaProdutos / somaPesos;

// Exibir a média ponderada
console.log("A média ponderada das notas é:", mediaPonderada);
