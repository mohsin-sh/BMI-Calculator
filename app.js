
//bmi = kg / (cm/100 * cm/100);


document.getElementById('submit').addEventListener("click", bmiCalculator);

function bmiCalculator(){
    let cm = parseFloat(document.getElementById("cm").value);
    let kg = parseFloat(document.getElementById("kg").value);

    let bmi;

    var newCm = parseFloat(cm/100);
    
    bmi = kg/(newCm *newCm)
    bmi = bmi.toFixed(2);
    console.log(bmi);
    document.getElementById("result").innerHTML = bmi;
}