document.addEventListener("DOMContentLoaded", () => {

    const heart = document.getElementById("heart")
    const likeList = document.querySelector("ul.likes")
    const counter = document.getElementById("counter")
    const pause = document.getElementById("pause")
    const plus = document.getElementById("plus")
    const minus = document.getElementById("minus")
    const form = document.getElementById("comment-form")
    const comment = document.getElementById("comment-input")
    const list = document.getElementById("list")
    const likedNumbers = {}

    let clickCounter = 0
    counter.innerHTML = 0

    function countUp() {
        parseInt(counter.innerHTML);
        counter.innerHTML++;
        clickCounter = 0;
    }

    let intervalCount = setInterval(countUp, 1000)

    function likeNumber() {
        const currentNumber = counter.innerText
        console.log("Liking number")
        if (likedNumbers[currentNumber]) {
            likedNumbers[currentNumber] += 1
            document.getElementById(currentNumber).innerText = `${currentNumber} has been liked ${likedNumbers[currentNumber]} times`
        } else {
            likedNumbers[currentNumber] = 1
            likeList.innerHTML += `<li id=${currentNumber}> ${currentNumber} has been liked ${likedNumbers[currentNumber]} times </li>`
        }

    }


    heart.addEventListener('click', likeNumber)

    pause.addEventListener('click', function(event) {
        if (pause.innerText == "pause") {
            pause.innerText = "resume"
            clearInterval(intervalCount)
            heart.disabled = true
            plus.disabled = true
            minus.disabled = true

            
        }
        else if (pause.innerText == "resume") {
            pause.innerText = "pause"
            intervalCount = setInterval(countUp, 1000)
            heart.disabled = false
            plus.disabled = false
            minus.disabled = false
        }
    })

    plus.addEventListener('click', function(event) {
        counter.innerHTML++
    })

    minus.addEventListener('click', function(event) {
        counter.innerHTML--
    })

    form.addEventListener('submit', function(event) {
        event.preventDefault()

        if (comment.value != "") {
            const newP = document.createElement('p');
            newP.innerText = `${comment.value}            `;
            list.append(newP)
            comment.value = ""
        }

        else {
            console.log("There's nothing there")
        }
    })





});
