const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
    display.style.color = "white"
    count = 0;
}
function solve() {
    if(display.value.trim() === ""){
        return;
    }
    try {
        display.value = eval(display.value)
        display.style.color = "#6ac639"
    }
    catch (error) {
        display.style.color = "rgb(246, 109, 132)"
    }
}
count = 0
function addBrackets() {
    let currentValue = display.value; 
    count++
    if (count %2 != 0) {
        display.value += "*(";
    }
    if (count%2 == 0  ) {
        display.value += ")";
    }
}

function positiveNegative(){
    if(display.value == ""){
        display.value = "-"
    }
    else{
        display.value = "";
    }
}
