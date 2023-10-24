const celsius = Number(prompt("Digite uma temperatura em Celsius: "))

const fahrenheit = celsius * 1.8 + 32

document.write("fahrenheit = " + fahrenheit + "º")

document.write("<br>")
// ---------2---------

const numeroSemana = Number(prompt("Digite um numero de 0 a 6"))
 
switch (numeroSemana) {
    case 0:
        document.write("Domingo")
        break;
    case 1:
        document.write("Segunda")
        break;
    case 2:
        document.write("Terça")
        break;
    case 3:
        document.write("Quarta")
        break;
    case 4:
        document.write("Quinta")
        break;
    case 5:
        document.write("Sexta")
        break;
    case 6:
        document.write("Sabado")
        break;
    default:
        document.write("Valor Inválido")
}


document.write("<br>")
// -----------------3--------------------

const numeroE = Number(prompt("Digite Um Numero Qualquer"))

if (numeroE < 0) {
    document.write("Valor negatio")
} else if (numeroE > 0) {
    document.write("Valor positivo")
} else {
    document.write("Valor zero")
}


document.write("<br>")
// ---------------4---------------------

const fabrica = Number(prompt("Digite o custo de fabrica: "))
const imposto = 0.45
const distribuidor = 0.28

const custoDoDistribuidor = fabrica * distribuidor
const custoDosImpostos = fabrica * imposto
const custoFinalAoConsumidor = fabrica + custoDoDistribuidor + custoDosImpostos

document.write("R$" + custoFinalAoConsumidor.toFixed(2).replace(".", ","))
document.write("<br>")

// ------------5------------------------

const peso = Number(prompt("Digite seu peso: "))
const altura = Number(prompt("Digite a sua altura: "))

const imc = peso / (altura **2)

if (imc < 18.5) {
    document.write("Seu IMC é: " + imc.toFixed(2) + " Você está abaixo do peso" )
} else if (imc >= 18.5 && imc < 25) {
 document.write ("Seu IMC é: " + imc.toFixed(2) + "Ideal!!")
} else if (imc > 25) {
    document.write( "Seu IMC é: " + imc.toFixed(2) + "Você está acima do peso")
}


document.write("<br>")
// -------------------6.--------------------------

const nunx = Number(prompt("digite um numero: "))
const nuny = Number(prompt("digite um numero: "))
const operação = prompt("Digite uma operação '+', '-', '/', '*' ")

switch (operação) {
    case "+":
        document.write(nunx + nuny)
        break;
    case "-":
        document.write(nunx - nuny)
        break;
    case "*": 
    document.write(nunx * nuny)
    break;
    case "/":
        document.write(nunx / nuny)
    default:
        document.write("Operação Inválida")
}

// document.write("<br>")
// ------------7------------------------
// 7. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// a conta do usuário deve ser criada já com um saldo positivo. O
// usuário precisa informar a quantidade de dinheiro que deseja
// retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// certo com o saque, e se o usuário informar um valor maior que o
// saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// suficiente em conta para realizar o saque.
// OBS: Na verificação se o valor do saque é maior que o saldo deve
// ser considerado e também contabilizado o valor da taxa a ser
// cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// da taxa do saque não pode ser maior que o saldo disponível.

let conta = Number(prompt("Informe seu saldo: "));
const saque = Number(prompt("Informe o valor do saque: "));

const valorFinalEmContaSemTaxa = conta - saque;
const valorFinalEmContaComTaxa = conta - saque - 4.50;

if (conta <= 0) {
  document.write("Valor inicial da conta deve ser positivo!");
} else if(saque <= 0) {
  document.write("Saque deve ter um valor positivo");
} else if(saque % 5 !== 0) {
  document.write("Valor do saque deve ser multiplo de 5");
} else if(valorFinalEmContaSemTaxa <= 0) {
  document.write("Valor do saque deve ser menor que o valor em conta");
} else if(valorFinalEmContaComTaxa <= 0) {
  document.write("Valor do saque deve ser menor que o valor em conta devido a taxa de saque");
} else {
  conta = valorFinalEmContaComTaxa;
  document.write(`Seu saldo final é igual a: ${conta}`)
}

document.write("<br>")
// // -------------------8---------------------------
const atletaIdade = Number(prompt("Digite a sua idade"))
const pesoAtleta = Number(prompt("Digite o seu Peso atleta"))

if (atletaIdade <= 12) {
    document.write("infantil")
} else if (atletaIdade <= 16) {
    if (pesoAtleta <= 40) {
        document.write("Juvenil Leve")
    }else {
        document.write("Juvenil Gordo")
    }
} else if (atletaIdade <= 24) {
    if (pesoAtleta <= 45) {
        document.write("Senior Leve")
    }else if (pesoAtleta <= 60){
        document.write("Senior médio")
    } else {
        document.write("Senior Gordo")
    } 
} else { 
        document.write("Veterano")
}

document.write("<br>")
// ----------9----------------------

// 9. Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.

const velocidade = Number(prompt("Qual foi a velocidade que vc passou no radar"));  
const kmhMais = velocidade - 80

if (kmhMais > 0) {
    const multa = kmhMais * 5
    document.write(`Voçê ultrapassou o limite de velocidade da via, e recebeu uma multa no valor de: R$ ${multa},00`)
} else {
    document.write("Voçê não ultrapassou o limite de velocidade da via")
}

document.write("<br>")