/*CONSTANTES*/
const resultadoSecion = document.querySelector("#resultado")
const apiURL = "https://mindicador.cl/api/"
const valorIngresado = document.querySelector("#ingreso")
const btnConvertir = document.querySelector("#cambio")
const valorResultado = document.querySelector("#resultado")
const monedaSeleccion = document.querySelector("#seleccion")


/*FUNCIONES*/
async function getData () {
    const res = await fetch(apiURL)
    const datos = await res.json();
    return datos
    
}




/*EVENTOS*/

btnConvertir.addEventListener("click" ,async () =>{
    if (monedaSeleccion.value == "Dolar"){
        const data = await getData()
        valorDolar = data.dolar.valor;
        resultado = valorIngresado.value / valorDolar
        resultadoFinal = Number(resultado).toFixed(2)
        valorResultado.innerHTML = resultadoFinal + " Dólares"
    }
     else{
        const data = await getData()
        valorEuro = data.euro.valor;
        resultado = valorIngresado.value / valorEuro
        resultadoFinal = Number(resultado).toFixed(2)
        valorResultado.innerHTML = resultadoFinal + " Euros"


     }
    
    
    
})


