let condição = 0

while (condição < 5) {
    console.log(`o a condição esta no numero ${condição}`);
    condição++
    // oq vai ser executado 
}


do { //faça 
    console.log(`o a condição esta no numero ${condição}`);
    condição++
} while (condição < 5) //enquanto 



for (let i = 0; i <= 10; i++) {
    console.log(`o a condição esta no numero ${i}`);
}


// 1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

let maiorAltura = 0
let menoraltura = 0


for (let i = 0; i <= 5; i++) {
    const altura = Number(prompt('Digite a altura'))

    if (altura < menoraltura) {
        altura = menoraltura

    }

    if (altura > maiorAltura) {
        altura = maiorAltura

    }
}

document.write(`a maior altura é: ${maiorAltura} <br> `)

document.write(`a menor altura é: ${menoraltura}`)

// -----------------------------------------------------------------------------

// 2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

let pedroAltura = 150

let lucasAltura = 110

let anos = 0

while (pedroAltura >= lucasAltura) {

    pedroAltura += 2
    lucasAltura += 3
    anos++
}

document.write(`a. Lucas e Pedro tenham o mesmo tamanho no total de ${anos} anos. <br>`)
document.write(`b. Lucas seja maior que Pedro. demorou no total de ${anos - 1}`)



// -----------------------------------------------------------------------------

// 3. Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ...

const numeroDaTabuada = Number(prompt("Digite um numero:"))
let interação = Number(prompt("Digite um numero matematico"))

for (let i = 0; i <= interação; i++) {
    console.log(`${i} x ${numeroDaTabuada} = ${i * numeroDaTabuada}`)
}

// -----------------------------------------------------------------------------

// 4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// e verifique quais números são múltiplos de 3 e quais são múltiplos
// de 5.

let multiplo3 = 0

let multiplo5 = 0

for (let i = 0; i < 250; i++) {
    if (i % 3 == 0) {
        multiplo3 += i + ", "
    }
    if (i % 5 == 0) {
        multiplo5 += i + ", "
    }
}
document.write(`O numero ${multiplo3} Divisivel por 3 <br>`)
document.write(`O numero ${multiplo5} é divisivel por 5 <br>`)

// -----------------------------------------------------------------------------

// 5. Faça um programa usando a estrutura “for” que leia um número
// inteiro positivo e mostre na tela uma contagem de 0 até o valor
// digitado:
// Ex: Digite um valor: 9
// Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!

const numEx5 = Number(prompt("Digite um valor"))
let mensagem = "Contagem, "

for (let i = 0; i <= numEx5; i++) {
    mensagem += i + ", ";
}
document.write(`${mensagem}. FIM!`);


// -----------------------------------------------------------------------------

// 6. Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

let contagem = " "

for (let i = 10000; i >= 1; i--) {

    let primo = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            primo = false;
            break;
        }
    }
    if (primo) {
        contagem += `[${i}] ,`
    } else {
        contagem += i + ","
    }
}

document.write(contagem)
// -----------------------------------------------------------------------------

// 7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.

let totalSomado = 0
let numPositivos = 0
let numNegativos = 0

for (let i = 0; i <= 10; i++) {
    let lerNum = Number(prompt("digite um numero: "))
    totalSomado += lerNum

    if (lerNum >= 0) {
        numPositivos++
    } else {
        numNegativos++
    }
}

let media = totalSomado / 10
let porcentagemPosit = (numPositivos / 10) * 100
let porcentagemNegat = (numNegativos / 10) * 100

console.log(`Média aritimetica: ${mediaNumeros}`)
console.log(`Total de números POSITIVOS: ${numerosPositivos}`);
console.log(`Total de números NEGATIVOS: ${numerosNegativos}`);
console.log(`Média de números POSITIVOS: ${porcentagemPositivos}`);
console.log(`Média de números NEGATIVOS: ${porcentagemNegativos}`);