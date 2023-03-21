function bmi() {
    var x = document.getElementById("height").value;
    var y = document.getElementById("weight").value;
    var bmi = y / (x / 100 * x / 100);
    var total = bmi.toFixed(2) //shows 2 numbers after decimal
    document.getElementById("result").innerHTML = "Your BMI is " + total;

}