// Notas e pesos
let nota1 = 5.5;
let nota2 = 3.0; 
let nota3 = 8.2; 

let peso1 = 2;
let peso2 = 3;
let peso3 = 5; 

// Cálculo da média ponderada
let somaProdutos = nota1 * peso1 + nota2 * peso2 + nota3 * peso3;
let somaPesos = peso1 + peso2 + peso3;
let mediaPonderada = somaProdutos / somaPesos;

// Verificar se o aluno passou ou reprovou
if (mediaPonderada >= 7) {
  console.log("O aluno passou com média ponderada de", mediaPonderada);
} else {
  console.log("O aluno reprovou com média ponderada de", mediaPonderada);
}
