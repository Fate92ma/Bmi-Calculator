// Variables

let weight = document.getElementById("weight"),

    height = document.getElementById("height"),

    calculate = document.getElementById("calculate"),

    result = document.getElementById("result"),

    bmi, txt;

// Events

calculate.addEventListener("click", calcBMI);

// function to calculate body mass index
function calcBMI() {

    bmi = Math.round((weight.value / height.value / height.value) * 10000).toFixed(1)

    txt = `<p>Your BMI is <strong>${bmi}</strong>, <br> Your Weight Status is</p>`

    if (weight.value == "" || height.value == "") {
        alert("Please Enter Your Weight and Height")
    }

    if (bmi <= 18.5) {
        result.innerHTML = `${txt} <strong>Underweight</strong>`
    }

    if (bmi >= 18.5 && bmi <= 25) {
        result.innerHTML = `${txt} <strong>"Normal</strong>`
    }

    if (bmi >= 25 && bmi <= 30) {
        result.innerHTML = `${txt} <strong>Overweight</strong>`
    }

    if (bmi >= 30) {
        result.innerHTML = `${txt} <strong>Obese</strong>`
    }

}