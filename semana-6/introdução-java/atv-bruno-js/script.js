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
document.write(`A aluna ${nome} ficou com media ${media.toFixed(1)}`)