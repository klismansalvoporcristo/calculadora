


function insert(number) {
let inputNumber = document.getElementById('resultado').innerHTML
document.getElementById('resultado').innerHTML = inputNumber + number
}

function clean() {
    document.getElementById('resultado').innerHTML = ""
}

function back() {
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML

    if (resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    else {
        alert('Nada para calcular!')
    }
}