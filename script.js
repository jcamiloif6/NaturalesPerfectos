function sumaDivisores(num) {
    let suma = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            suma += i;
        }
    }
    return suma;
}

function numerosPerfectosEnRango(inicio, fin) {
    const numerosPerfectos = [];
    for (let num = inicio; num <= fin; num++) {
        if (sumaDivisores(num) === num) {
            numerosPerfectos.push(num);
        }
    }
    return numerosPerfectos;
}

function buscarNumerosPerfectos() {
    const inicio = parseInt(document.getElementById('inicio').value);
    const fin = parseInt(document.getElementById('fin').value);

    if (inicio > fin) {
        document.getElementById('resultado').innerText = "Error: Rango Invalido";
    }
    else {
        const resultado = numerosPerfectosEnRango(inicio, fin);
        document.getElementById('resultado').innerText = `Los números perfectos en el rango [${inicio}, ${fin}] son: ${resultado.join(', ')}`;
    }

}
