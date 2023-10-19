// 1. Crie uma variável JavaScript e coloque nela o valor de sua idade.
// Mostre no html usando o document.write() o dado contido na
// variável junto da frase "Minha idade é x anos", sendo "x" o valor
// armazenado na sua variável.

const idade = 17

document.write(`<h1> Minha idade é ${idade} anos <br/> </h1>`) 



// // 2. Crie três variáveis JavaScript, em duas delas atribua os valores que
// você quiser e na outra atribua o valor da soma das duas primeiras
// variáveis. Apresente valor da soma no documento html junto da
// frase "A resultado da soma de x e y é z", sendo x o valor armazenado
// na primeira variável, y o valor armazenado segunda variável e z o
// valor armazenado na terceira variável

const num1 = 10
const num2 = 20
const sum = num1 + num2

document.write(`<h2> A soma de ${num1} e ${num2} é ${sum} <br/> </h2>`)




// // 3. Crie três variáveis, na primeira variável coloque o total de uma
// compra, por exemplo 149.90. Na segunda variável coloque a
// quantidade de parcelas, por exemplo 2. Na terceira variável coloque
// o valor da parcela. Apresente no documento html as seguintes
// informações:

"O valor total da compra foi R$_,_"
"Forma de pagamento: _x de R$_,_"
const total = 200.50
const parcelas = 24
const valorParcelas = total / parcelas

document.write(`<h3> O valor total da compra foi R$${total.toString().replace('.', ',')} <br/> </h3>`)
document.write(`<h3> A forma de pagamento foi: ${parcelas} x de R$ ${valorParcelas.toFixed(2).replace('.', ',')} <br/> </h3>`)





// 4. Crie duas variáveis. Na primeira coloque um total de minutos e
// defina um valor para ela (por exemplo, minutos = 120). Na segunda

// coloque o total em segundos destes minutos armazenados na
// primeira variável. Apresente no documento html a seguinte
// informação: "_ minutos equivale à _ segundos!"

const minutos = 120
const segundos = minutos * 60

document.write (`<h3> ${minutos} minutos equivale á ${segundos} segundos!   <br/> </h3> `)




// 5. Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
// segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
// Calcule a média das notas e armazene na quinta variável criada.
// Apresente no documento html a seguinte informação:
// "O aluno _____ ficou com média _,_"

const nome = "Bianca"
const nota1 = 8.3
const nota2 = 5.3
const nota3 = 3.3

const media = ((nota1 + nota2 + nota3) / 3  )
document.write(`<h3>A aluna ${nome} ficou com media ${media.toFixed(1)} <br> </h3>`)


// 6. Desenvolva um algoritmo que armazene o valor 10 em uma variável
// A e o valor 20 em uma variável B. A seguir (utilizando apenas
// atribuições entre variáveis) troque os seus conteúdos fazendo com
// que o valor que está em A passe para B e vice-versa. Ao final,
// escrever os valores que ficaram armazenados nas variáveis.

let a = 10
let b = 20

let c = a 
a = b 
b = c

document.write(`A: ${a}  B: ${b}`)




// 7. Desenvolva um algoritmo para ler o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e
// escrever o percentual que cada um representa em relação ao total
// de eleitores.

let votosTotal = 456
let votosBranco = 45
let votosNulos = 87

const brencoPerCent = (votosBranco/votosTotal) * 100
const nuloPerCent = (votosNulos/votosTotal) * 100
const votosValidos = (((votosTotal - votosNulos - votosBranco) / votosTotal) * 100)

document.write(`O perncentual de votos validos é ${votosValidos.toFixed(2)}%, percentual de votos nulos é ${votosNulos.toFixed(2)}% e o percentual de votos brancos é ${brencoPerCent.toFixed(2)}% <br> <br>`)






// 8. Desenvolva um algoritmo para ler dois valores e imprimir uma das
// três mensagens a seguir:
// a. ‘Números iguais’, caso os números sejam iguais;
// b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let valor1 = 50
let valor2 = 150

if(valor1 === valor2) {
    document.write(`Números iguais!`)
} else if (valor1 > valor2) {
    document.write(`O primeiro número é maior! <br> <br> `)
} else {
    document.write(`O segundo número é maior! <br> <br> `)
}





// 9. As maçãs desta estação custam R$0,30 se forem compradas
// menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// doze. Desenvolva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const macas = 20

if (macas < 12 ) {
    const total = macas * 0.3
    document.write(`Valor total da compra R$${total.toFixed(2)} <br> <br>`)
} else {
    const total = macas * 0.25
    document.write(`Valor total da compra R$${total.toFixed(2)} <br> <br>`)
}



// 10. Escreva um algoritmo que tenha como valores de entradas o nome
// e idade do usuário e imprima no terminal o nome, a idade e o ano
// de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
// em 2000”.
// OBS: Pegue o ano atual como base

const name = "bernardo"
const idadi = 17
document.write(`nome: ${name} idade: ${idadi} ano que nasceu: ${2023 - idadi}  <br> <br>`)





// 11. Crie um algoritmo que armazene um número inteiro positivo, e gere
// um alerta com as seguintes mensagens:
// a. “Número é par!”, se o valor armazenado for par;
// b. “Número é impar!”, se o valor armazenado for ímpar;

const numero = 10 

if (numero % 2 === 0) {
    document.write(`O número ${numero} é par! <br> <br>`)
} else {
    document.write(`O número ${numero} é impar! <br> <br>`)
}





// 12. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

const anoAtual = 2023
const anoNascimento = 2006

if (anoAtual - anoNascimento >= 16) {
    document.write(`Voce pode votar esse ano :)`)
} else {
    document.write(`Voce não pode votar esse ano :(`)
}