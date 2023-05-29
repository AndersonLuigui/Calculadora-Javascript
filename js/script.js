function insert(num) {
    let numero = document.querySelector('h3').innerHTML;
    document.querySelector('h3').innerHTML = numero + num;
    
}

function clean() {
    document.querySelector('h3').innerHTML = "";
}

function back() {
    let resultado = document.querySelector('h3').innerHTML;
    document.querySelector('h3').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    let resultado = document.querySelector('h3').innerHTML;

    if(resultado) {
        document.querySelector('h3').innerHTML = eval(resultado);
    } 
    else {
        document.querySelector('h3').innerHTML = ("Nada para calcular");
    }
}