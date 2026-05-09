/*CONSTANTES*/
const resultadoSecion = document.querySelector("#resultado")
const apiURL = "https://mindicador.cl/api/"
const valorIngresado = document.querySelector("#ingreso")
const btnConvertir = document.querySelector("#cambio")
const valorResultado = document.querySelector("#resultado")
const monedaSeleccion = document.querySelector("#seleccion")
let chart;


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


async function dataToChartDolar (){
        const res = await fetch("https://mindicador.cl/api/dolar/2026")
        const monedas = await res.json();

        const cutLabels = monedas.serie.slice(0,10)

        const labels = cutLabels.map((moneda) => {
            return moneda.fecha.split("T")[0];
        });

        const data = monedas.serie.map((moneda)=>{
            return moneda.valor;
        })

      
        const datasets = [
            {
                label:"Dólar",
                borderColor: "rgb(173, 85, 104)", data
            }
        ]
        return { labels, datasets}
        console.log(cutLabels)
    }

    
    
    async function renderGraficaDolar() {
        const data = await dataToChartDolar()
        const config = {
            type: "line", data
        }
        const myChart = document.querySelector("#myChart")
        if(chart){
            chart.destroy();
        }

        chart = new Chart(myChart,config)
        
    }

    
async function dataToChartEuro (){
        const res = await fetch("https://mindicador.cl/api/euro/2026")
        const monedas = await res.json();

        const cutLabels = monedas.serie.slice(0,10)

        const labels = cutLabels.map((moneda) => {
            return moneda.fecha.split("T")[0];
        });
    

        const data = monedas.serie.map((moneda)=>{
            return moneda.valor;
        })
      

        const datasets = [
            {
                label:"Euro",
                borderColor: "rgb(173, 85, 104)", data
            }
        ]
        return { labels, datasets}
    }



    async function renderGraficaEuro() {
        const data = await dataToChartEuro()
        const config = {
            type: "line", data
        }
        const myChart = document.querySelector("#myChart")

        if(chart){
            chart.destroy();
        }
        chart= new Chart(myChart,config)
        
    }




/*EVENTOS*/

btnConvertir.addEventListener("click" ,async () =>{
    if (monedaSeleccion.value == "Dolar"){
        const data = await getData()
        valorDolar = data.dolar.valor;
        resultado = valorIngresado.value / valorDolar
        resultadoFinal = Number(resultado).toFixed(2)
        valorResultado.innerHTML = "$ " + resultadoFinal
        renderGraficaDolar();
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
        renderGraficaEuro();


     }
    })




    

