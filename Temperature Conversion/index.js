
const textBox = document.getElementById("textbox");
const toCelsius = document.getElementById("tocelsius");
const toFahrenheit = document.getElementById("tofahrenheit");
const result = document.getElementById("result");

let temp;

function convert(){
    
    if(toCelsius.checked){
        // Convert Fahrenheit to Celsius

        temp = Number(textBox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = temp+"°c"

    }
    else if(toFahrenheit.checked){
        // Convert Celsius to Fahrenheit

        temp = Number(textBox.value);
        temp = temp*9/5 + 32;
        result.textContent = temp+"°F"
    }
    else{
        result.textContent = "Select a unit";
    }
}
