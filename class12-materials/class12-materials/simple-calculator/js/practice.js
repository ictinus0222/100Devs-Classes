let total = 0 

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', addThree)
document.querySelector('#zebra').addEventListener('click', addNine)
document.querySelector('#cantThinkOfAnything').addEventListener('click', subTwo)
document.querySelector('#yoyo').addEventListener('click', subFive)

function makeZero() {
    total = 0
    document.querySelector('#placeToPutResult').innerText = total
}

function addThree() {
    total = total + 3
    document.querySelector('#placeToPutResult').innerText = total
}

function addNine() {
    total = total + 9
    document.querySelector('#placeToPutResult').innerText = total
}

function subTwo() {
    total = total - 2
    document.querySelector('#placeToPutResult').innerText = total
}

function subFive() {
    total = total - 5
    document.querySelector('#placeToPutResult').innerText = total
}

