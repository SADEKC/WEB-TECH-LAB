function press(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    var result = document.getElementById("display").value;

    try {
        document.getElementById("display").value = eval(result);
    } 
    catch {
        alert("Invalid Input");
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}