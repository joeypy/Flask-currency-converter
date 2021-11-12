"use strict";

const input_bs = document.getElementById('bs');
const input_dolar = document.getElementById('dolar');
const tasa = document.getElementById('tasa');
const usd_eq = document.getElementById('usd_eq')

usd_eq.innerText = (1 / tasa.innerText).toFixed(2)

addEventListener("keyup", (event) => {
    if(event.target.id == "bs") {
        let result = input_dolar.textContent = event.target.value / parseFloat(tasa.innerText);
        input_dolar.value = result.toFixed(2);
    } else if (event.target.id == "dolar"){
        let result = input_bs.textContent = event.target.value * parseFloat(tasa.innerText);
        input_bs.value = result.toFixed(2);
    }
})

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}







