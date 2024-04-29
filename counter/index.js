
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
let count = 0;
const countlabel = document.getElementById("count");

increase.onclick = function () {
    count++;
    countlabel.textContent = count;
}
crease.onclick = function () {
    count--;
    countlabel.textContent = count;
}
reset.onclick = function () {
    count=0;
    countlabel.textContent = count;
}