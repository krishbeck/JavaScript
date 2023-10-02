console.log("Hello Krishna!!")


let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function increment(){
    count +=1;
    countEl.innerText = count
}

function save(){
    console.log("Save Button Clicked")
}