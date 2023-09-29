const display = document.querySelector(".display");
const displayprev = document.querySelector(".displayprev");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";


const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=" && output !== "") {
        displayprev.value = output;
        output = eval(output.replace("%", "/100"));
    }
    else if (btnValue === "AC") {
        output = "";
        displayprev.value = output;
    }
    else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    }
    else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

//for each event listener for every click on buttons
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

