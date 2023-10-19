// mostrar a idade com o document.write
const idade = 17

document.write(`<h1> Minha idade é ${idade} anos <br/> </h1>`) 



// mini calculadora
const num1 = 10
const num2 = 20
const sum = num1 + num2

document.write(`<h2> A soma de ${num1} e ${num2} é ${sum} <br/> </h2>`)

// VARIAVEIS SOBRE VALOR E PARCELAS
const total = 200.50
const parcelas = 24
const valorParcelas = total / parcelas

document.write(`<h3> O valor total da compra foi R$${total.toString().replace('.', ',')} <br/> </h3>`)
document.write(`<h3> A forma de pagamento foi: ${parcelas} x de R$ ${valorParcelas.toFixed(2).replace('.', ',')} <br/> </h3>`)

