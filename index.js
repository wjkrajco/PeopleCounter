
let count = 0
let saved = false
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


function increment() {
    count+=1
    countEl.textContent = count

}

function save() {
    let savedCount = count
    if (saved) {
        saveEl.textContent += " - " + savedCount
    }
    else {
        saveEl.textContent += savedCount
    }
    count = 0
    countEl.textContent = 0
    saved = true
}