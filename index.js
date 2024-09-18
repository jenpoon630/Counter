const display = document.getElementById("display");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");
let count = 0;

display.textContent = count;

increase.onclick = function () {
    count++;
    display.textContent = count
}

reset.onclick = function () {
    count = 0;
    display.textContent = count
}

decrease.onclick = function () {
    count--;
    display.textContent = count
}


