// Notas e pesos
let nota1 = 6.5; // Nota da primeira avaliação
let nota2 = 8.0; // Nota da segunda avaliação
let nota3 = 7.2; // Nota da terceira avaliação

const peso1 = 2; // Peso da primeira avaliação
const peso2 = 3; // Peso da segunda avaliação
const peso3 = 5; // Peso da terceira avaliação

// Cálculo da média ponderada
const somaProdutos = nota1 * peso1 + nota2 * peso2 + nota3 * peso3;
const somaPesos = peso1 + peso2 + peso3;
const mediaPonderada = somaProdutos / somaPesos;

// Verificar se o aluno passou ou reprovou
if (mediaPonderada >= 7) {
  console.log("O aluno passou com média ponderada de", mediaPonderada);
} else {
  console.log("O aluno reprovou com média ponderada de", mediaPonderada);
}
