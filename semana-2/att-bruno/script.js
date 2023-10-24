// const celsius = Number(prompt("Digite uma temperatura em Celsius: "))

// const fahrenheit = celsius * 1.8 + 32

// document.write("fahrenheit = " + fahrenheit + "º")


// ---------2---------

// const numeroSemana = Number(prompt("Digite um numero de 0 a 6"))
 
// switch (numeroSemana) {
//     case 0:
//         document.write("Domingo")
//         break;
//     case 1:
//         document.write("Segunda")
//         break;
//     case 2:
//         document.write("Terça")
//         break;
//     case 3:
//         document.write("Quarta")
//         break;
//     case 4:
//         document.write("Quinta")
//         break;
//     case 5:
//         document.write("Sexta")
//         break;
//     case 6:
//         document.write("Sabado")
//         break;
//     default:
//         document.write("Valor Inválido")
// }

// -----------------3--------------------

// const numeroE = Number(prompt("Digite Um Numero Qualquer"))

// if (numeroE < 0) {
//     document.write("Valor negatio")
// } else if (numeroE > 0) {
//     document.write("Valor positivo")
// } else {
//     document.write("Valor zero")
// }

// ---------------4---------------------

const fabrica = Number(prompt("Digite o custo de fabrica: "))
const imposto = 0.45
const distribuidor = 0.28

const custoDoDistribuidor = fabrica * distribuidor
const custoDosImpostos = fabrica * imposto
const custoFinalAoConsumidor = fabrica + custoDoDistribuidor + custoDosImpostos

document.write("R$" + custoFinalAoConsumidor.toFixed(2).replace(".", ","))

// ------------5------------------------

const peso = Number(prompt("Digite seu peso: "))
const altura = Number(prompt("Digite a sua altura: "))

const imc = peso / (altura **2)

if (imc < 18.5) {
    document.write("Você está abaixo do peso")
} else if (imc >= 18.5 && imc < 25) {
 document.write ("Ideal!!")
} else if (imc > 25) {
    document.write("Você está acima do peso")
}