const inputTemperatura = document.getElementById("inputTemperatura");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

let temperatura;

function convert(){
    if(toFahrenheit.checked){
        temperatura = Number(inputTemperatura.value);
        temperatura = temperatura * 9 / 5 + 32;
        result.textContent = `${temperatura.toFixed(1)} °F`;
    }else if(toCelsius.checked){
        temperatura = Number(inputTemperatura.value);
        temperatura = (temperatura - 32) * (5/9);
        result.textContent = `${temperatura.toFixed(1)} °C`;
    }else{
        result.textContent = "Selecione uma das unidades acima";
    }
}
