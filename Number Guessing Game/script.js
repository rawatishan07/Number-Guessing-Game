let number = Math.floor(Math.random() * 100) + 1
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
        document.getElementById("box").style.height = "620px"

    }
    else if (userGuess > number) {
        attempt++
        document.getElementById("output").textContent = `Too High!! Try Again`
        document.getElementById("output").style.fontSize = "40px"
        document.getElementById("guess").textContent = `Attempts: ${attempt}`
        document.getElementById("guess").style.fontSize = "40px"
        document.getElementById("number").style.fontSize = "40px"
        document.getElementById("box").style.height = "620px"
        
    }
    else if (userGuess < number) {
        attempt++
        document.getElementById("output").textContent = `Too Low!! Try Again`
        document.getElementById("output").style.fontSize = "40px"
        document.getElementById("guess").textContent = `Attempts: ${attempt}`
        document.getElementById("guess").style.fontSize = "40px"
        document.getElementById("number").style.fontSize = "40px"
        document.getElementById("box").style.height = "620px"

    }
}
btn1.onclick = function(){
    number = Math.floor(Math.random() * 100) + 1
    console.log(number)
    attempt = 0
    document.getElementById("guess").textContent = " "
    document.getElementById("output").textContent = " "
    document.getElementById("number").textContent = " "
    document.getElementById("box").style.height = "400px"
}
