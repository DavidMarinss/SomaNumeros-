let valor = 0

valor = parseInt(prompt("Digite um valor:"))


console.log(SomarNumeros(valor))

function SomarNumeros(ContadorParametro) {
    for (contador = 1; contador <= ContadorParametro; contador++) {
        console.log("+", contador)
    }
}
