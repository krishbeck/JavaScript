console.log("Hello Krishna!!")


let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)
console.log(saveEl)

let count = 0

function increment(){
    count +=1;
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log("Save Button Clicked")
}