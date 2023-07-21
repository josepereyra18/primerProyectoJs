const calculadora = {
    resultado: 0,
    estado: 0,

    sumar(a, b) {
        this.resultado = a + b;
    },

    restar(a, b) {
        this.resultado = a - b;
    },

    dividir(a, b) {
        if (b === 0) {
            this.estado = 1;
        } else {
            this.resultado = a / b;
        }
    },

    multiplicar(a, b) {
        this.resultado = a * b;
    },

    realizarOperacion(operacion, a, b) {
        switch (operacion) {
            case "+":
                this.sumar(a, b);
                break;
            case "-":
                this.restar(a, b);
                break;
            case "/":
                this.dividir(a, b);
                break;
            case "*":
                this.multiplicar(a, b);
                break;
            default:
                this.estado = 1;
                break;
        }
    },
};

const resultados = [];

function obtenerResultadosPositivos(resultados) {
    return resultados.filter((resultado) => resultado.resultado >= 0);
}

function obtenerPromedioResultados(resultados) {
    const totalResultados = resultados.length;
    if (totalResultados === 0) return 0;

    const sumaResultados = resultados.reduce(
        (acumulador, resultado) => acumulador + resultado.resultado,
        0
    );

    return sumaResultados / totalResultados;
}

alert("BIENVENID@ A ✨LA CALCULADORA MAGICA✨");

do {
    const numero1 = Number(prompt("Ingrese un número 😎"));

    // Menú de opciones para que el usuario elija la operación
    const operaciones = ["+", "-", "*", "/"];
    let operacionElegida;

    do {
        const opciones = operaciones.join(", ");
        operacionElegida = prompt(`Ingrese la operación que desea (${opciones}) 🤔`);
    } while (!operaciones.includes(operacionElegida));


    const numero2 = Number(prompt("Ingrese otro número 😁"));

    calculadora.realizarOperacion(operacionElegida, numero1, numero2);

    if (calculadora.estado === 1) {
        alert("No se puede hacer esa operación. Lo sentimos! 🥲");
    } else {
        const operacionRealizada = `${numero1} ${operacionElegida} ${numero2} = ${calculadora.resultado}`;
        alert(`El resultado de ${operacionRealizada}`);

        resultados.push({
            operacionRealizada,
            resultado: calculadora.resultado,
        });
    }

    askAgain = prompt("¿Quiere volver a utilizar ✨LA CALCULADORA MAGICA✨? (si - no)").toLowerCase();
    if (askAgain === "no") {
        alert("Oh... okay, espero que nos visites pronto 🥺");

        // Recorremos el array resultados para construir la cadena con las operaciones ingresadas
        let resultadosMsg = "🎺 RESULTADOS 🎺\n-Operaciones ingresadas:\n";
        resultados.forEach((resultado) => {
            resultadosMsg += `${resultado.operacionRealizada}\n`;
        });

        const resultadosPositivos = obtenerResultadosPositivos(resultados);
        resultadosMsg += "-Resultados positivos:\n";
        resultadosPositivos.forEach((resultado) => {
            resultadosMsg += `${resultado.operacionRealizada}\n`;
        });

        // Agregamos el promedio de los resultados a la cadena
        const promedioResultados = obtenerPromedioResultados(resultados);
        resultadosMsg += `-Promedio de resultados: ${promedioResultados.toFixed(2)}`;

        alert(resultadosMsg);
    }else if (askAgain != "si"){
        alert(" uhhm okay? suponemos q si! 😎")
        askAgain ="si"
    }

    }while (askAgain === "si");

