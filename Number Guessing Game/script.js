let number = Math.trunc(Math.random() * 100)
console.log(number)

let attempt = 0

let num = document.getElementById("input")
let btn = document.getElementById("btn")
let btn1 = document.getElementById("btn1")

btn.onclick = function() {
    let userGuess = Number(num.value)
    
    if (userGuess == number) {
        attempt++
        document.getElementById("output").textContent = `That's Correct!!!`
        document.getElementById("output").style.fontSize = "40px"
        document.getElementById("guess").textContent = `Attempts: ${attempt}`
        document.getElementById("guess").style.fontSize = "40px"
        document.getElementById("number").textContent = `The number is ${number}`
        document.getElementById("number").style.fontSize = "40px"
    }
    else if (userGuess > number) {
        attempt++
        document.getElementById("output").textContent = `Too High!! Try Again`
        document.getElementById("output").style.fontSize = "40px"
        document.getElementById("guess").textContent = `Attempts: ${attempt}`
        document.getElementById("guess").style.fontSize = "40px"
    }
    else if (userGuess < number) {
        attempt++
        document.getElementById("output").textContent = `Too Low!! Try Again`
        document.getElementById("output").style.fontSize = "40px"
        document.getElementById("guess").textContent = `Attempts: ${attempt}`
        document.getElementById("guess").style.fontSize = "40px"
    }
}
btn1.onclick = function(){
    attempt = 0
    document.getElementById("guess").textContent = " "
    document.getElementById("output").textContent = " "
}
