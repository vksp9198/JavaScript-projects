const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const height = parseInt(document.getElementById("height").value)
    const weight = parseInt(document.getElementById("weight").value)
    const result = document.querySelector(".results")

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const bmiValue = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `${bmiValue}`
        if (bmiValue <= 18.8) {
            result.innerHTML = `${bmiValue} (Under weight) `
        } else if (bmiValue > 18.6 && bmiValue <= 24.9) {
            result.innerHTML = `${bmiValue} (Normal Range) `
        } else {
            result.innerHTML = `${bmiValue} (Over weight) `
        }
    }
})