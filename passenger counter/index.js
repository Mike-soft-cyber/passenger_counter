const countEl = document.getElementById("count-el");
const saveBtn = document.getElementById("save-btn");
const saveEl = document.getElementById("save-el");

let count = 0;

function increment(){
    count++; 
    countEl.innerText = count;
}

function save(){
    const points = " " + count + " - "
    saveEl.innerText += points;
    count = 0;
    countEl.textContent = count
}