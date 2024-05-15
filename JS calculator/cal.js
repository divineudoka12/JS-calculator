const outputScreen = document. querySelector("#output-screen");


function display(num) {
    outputScreen.value += num;
}

function calculate() {
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err)
    {
        alert("TRY THE RIGHT THING")
    }
   
}

function Clear() {
    outputScreen.value = "";
}
function del () {
    outputScreen.value = outputScreen.value.slice(0,-1)
}

