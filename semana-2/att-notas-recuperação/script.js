// notas

let nota1 = prompt("Digite a sua primeira nota: ")
let nota2 = prompt("Digite a sua segunda nota: ")
let nota3 = prompt("DIgite a sua terceira nota: ") 

nota1 = parseFloat(nota1)
nota2 = parseFloat(nota2)
nota3 = parseFloat(nota3)

let media = (nota1 + nota2 + nota3) / 3

if (media >= 9 && media <= 10) {
    document.write("Aprovado com nota excelente <br>")
} else if (media >= 7) {
    document.write("Aprovado com uma nota boa <br>")
} else if (media < 7) {
    const notaRec = Number(prompt("Digite a nota de recuperação"))

    if (notaRec >= 6) {
        document.write("aprovado com recuperação, parabéns. <br>")
    } else {
        document.write("reprovado estude mais seu bobão.<br>")
    } 
}

document.write(media.toFixed(2))