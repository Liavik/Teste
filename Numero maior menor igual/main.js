//OUTRA MANEIRA DE CHAMAR O SUBMIT
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var valorA = document.getElementById('numeroA').value;
    var valorB = document.getElementById('numeroB').value;

    var numeroA = parseInt(valorA);
    var numeroB = parseInt(valorB);

    if (!isNaN(numeroA) && !isNaN(numeroB)) {
        if (numeroA === numeroB) {
            alert("Os números são iguais.");
        } else if (numeroA > numeroB) {
            alert("O número A é maior que o número B.");
        } else {
            alert("O número B é maior que o número A.");
        }
    } else {
        alert("Por favor, digite números inteiros válidos.");
    }
});
