/*CONSTANTES*/
const resultadoSecion = document.querySelector("#resultado")
const apiURL = "https://mindicador.cl/api/"
const valorIngresado = document.querySelector("#ingreso")
const btnConvertir = document.querySelector("#cambio")
const valorResultado = document.querySelector("#resultado")
const monedaSeleccion = document.querySelector("#seleccion")


/*FUNCIONES*/
async function getData () {
    try{
        const res = await fetch(apiURL)
        const datos = await res.json();
        return datos;}

        catch (e){
            alert("¡Algo salió mal! No se obtuvieron datos desde la API");
        }
    
}




/*EVENTOS*/

btnConvertir.addEventListener("click" ,async () =>{
    if (monedaSeleccion.value == "Dolar"){
        const data = await getData()
        valorDolar = data.dolar.valor;
        resultado = valorIngresado.value / valorDolar
        resultadoFinal = Number(resultado).toFixed(2)
        valorResultado.innerHTML = "$ " + resultadoFinal 
    }

    else if(valorIngresado.value == 0){
        alert("Ingrese un valor en CLP mayor a 0")
    }
    
     else{
        const data = await getData()
        valorEuro = data.euro.valor;
        resultado = valorIngresado.value / valorEuro
        resultadoFinal = Number(resultado).toFixed(2)
        valorResultado.innerHTML = "€ " + resultadoFinal 


     }
    })

