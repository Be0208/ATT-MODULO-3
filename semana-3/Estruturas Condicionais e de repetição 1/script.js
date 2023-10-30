// 1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.

let idade; 
let contador = 0
let media = 0
let totalIdade = 0

while (idade!= 999) {
    idade = Number(prompt("Digite a idade do aluno:"))
    if (idade!= 999) {
        totalIdade += idade
        contador++
    }
}
console.log(`media ${totalIdade / contador} toFixed: ${totalIdade}`);


// 2. Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.

let salarioHomens = 0 
let salarioMulheres = 0 
confirm = true 

while (continuar) {
    let salario = prompt("Qual o salario?")
    let sexo = prompt("O salario é de um Homem ou uma mulher?")
    
    if (sexo == "Homem") {
        salarioHomens += salario
    } else if (sexo == "Mulher") {
        salarioMulheres += salario
    } 
    continuar = confirm("Deseja continuar?")
    
} 
document.write(`O salario Do humem é: ${salarioHomens} <br>`)
document.write(`O salario da mulher é: ${salarioMulheres} <br>`)


// 3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

const inicial = Number(prompt("Insira o valor inicial:"))
const final = Number(prompt("Insira o valor final:"))
const incremento = Number(prompt("Insira o valor de incremento:"))


document.write("Contagem")
document.write(inicial)
for (let valor = inicial; valor < final; valor+= incremento) {
    documento.write(valor + " ")
}
document.write(final)
document.write("<br>Acabou!")


// 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto

// b. Mulheres ganham 13% de desconto

let nome = " "
let genero = " "
let valorCompra = " "

nome = prompt('Gigite seu nome')
genero = prompt('digite seu Sexo, M - Mulher ou H = Homem').toUpperCase( )
valorCompra = Number(prompt("Digite o valor da comprado"))

if (genero === 'F') {
    valorCompra *= 0.87

} else if (genero === 'H') {
    valorCompra *= 0.95

} else {
    alert("Caractere invalido")
}

document.write(`O seu nome é ${nome}, seu sexo é ${genero}, e seu valor da compra é de R$ ${valorCompra.toFixed(2)}`)



// 5. Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.

const distancia = Number(prompt('Insira a distancia'))

if (distancia <= 200) {
    document.write( `Valor da passagem é de R$${(distancia * 0.5.toFixed(2).replace(".", ","))}`)
}else {
    document.write(`Valor da passagem é de R$${(distancia * 0.45.toFixed(2).replace(".", ","))}`)
}


// 6. Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m2. O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP

const largura = Number(prompt("Insira a largura do terreno"))
const comprimento = Number(prompt("Insira o comprimento do terreno"))
const area = largura * comprimento

if (area <= 100) {
    document.write(`A área do terreno é de ${area.toFixed(2)}m², e o seu tipo é: TERRENO POPULAR`)
} else if (area >= 100) {
    document.write(`A área do terreno é de ${area.toFixed(2)}m², e o seu tipo é: TERRENO MASTER`)
} else {
    document.write(`A área do terreno é de ${area.toFixed(2)}m², e o seu tipo é: TERRENO VIP`)
}