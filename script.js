const numerosNoPerfectos = [];
const StopLoopNumbers = [];
let Stop = 0;

function sumaDivisores(num) {
    let suma = 0;
    /*Reduciendo complejidad con ciclos innecesarios, solo llegando cada numero hasta su mitad*/
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            suma += i;
        }
        stop = i;
    }
    StopLoopNumbers.push(stop + 1);
    return suma;
}

function numerosPerfectosEnRango(inicio, fin) {
    const numerosPerfectos = [];
    for (let num = inicio; num <= fin; num++) {
        if (num % 2 === 0) {
            if (sumaDivisores(num) === num) {
                numerosPerfectos.push(num);
            }
        }

        else {
            numerosNoPerfectos.push(num);
        }
    }
    return numerosPerfectos;
}

function buscarNumerosPerfectos() {
    const inicio = parseInt(document.getElementById('inicio').value);
    const fin = parseInt(document.getElementById('fin').value);

    if (inicio <= 0) {
        document.getElementById('resultado').innerText = "Error: Solo se permiten numeros mayores o iguales a 1";
    }
    else if (inicio > fin) {
        document.getElementById('resultado').innerText = "Error: Rango Invalido";
    }
    else {
        const resultado = numerosPerfectosEnRango(inicio, fin);
        document.getElementById('resultado').innerText = `Los números perfectos en el rango [${inicio}, ${fin}] son: ${resultado.join(', ')}`;
        console.log(StopLoopNumbers);
        console.log(numerosNoPerfectos);
    }

}
