//* Ejercicios lógica de programación 2 

// Fórmula de conversión:  Celsius a Fahrenheit → °F= (°C*9/5)+32
// Fórmula de conversión: Celsius a Kelvin → °K= °C+273.15

function celsiusFahrenheit (){
    let celsius = parseInt(document.getElementById("cel-far").value);
    if (isNaN(celsius)){
    document.getElementById("resultados").innerText = "Por favor, ingresa solo números.";
    }else{
        let fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById("resultados").innerText = "Resultado: " + celsius + " °C equivalen a " + fahrenheit + " °F";
    }
}



function celsiusKelvin (){
    let celsius2 = parseInt(document.getElementById("cel-kel").value);
    if (isNaN(celsius2)){
    document.getElementById("resultados").innerText = "Por favor, ingresa solo números.";
    }else{
        let kelvin = celsius2 + 273.15;
        document.getElementById("resultados2").innerText = "Resultado: "  + celsius2 + " °C equivalen a " + kelvin + " °K Kelvin";
    }

}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2000); 
});

document.getElementById('reinicio').addEventListener('click', function() {
    location.reload(); 
});



