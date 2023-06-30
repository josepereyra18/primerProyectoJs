// calculadora

let resultado =0
let estado =0
let numero1
let numero2
let operacion
let askAgain

const calcular = function(operacion, a,b){
    switch (operacion) {
        case "+":
            resultado= a+b
            break;
        case "-":
            resultado = a-b
            break;
        case "/":
            if (b == 0){
                estado=1
                break;
            }else{
                resultado = a/b
                break;
            }
        case "*":
            resultado = a*b
            break;
        default:
            estado = 1
            break;
    }
}

alert("BIENVENID@ A ✨LA CALCULADORA MAGICA✨")
do{
    numero1= Number(prompt("ingrese un numero 😎"))
    operacion= prompt("Ingrese la operacion que desa ( * , + , - , / )🤔")
    numero2= Number(prompt("Ingrese otro numero 😁"))

    calcular(operacion,numero1, numero2)
    if (estado == 1){
        alert("no se puede hacer esa operacion. lo sentimos!🥲")
    }else{
        alert("el resultado de "+numero1+operacion+numero2+" es: "+resultado)
    }

    askAgain= prompt("quiere volver a utilizar ✨LA CALCULADORA MAGICA✨? (si - no) ").toLowerCase()

    if (askAgain =="no"){
        alert("oh.. okay, espero que nos visites pronto 🥺")
    }else if(askAgain != "si"){
        alert(" uhhm okay? suponemos q si! 😎")
        askAgain ="si"
    }

}while (askAgain==="si")


