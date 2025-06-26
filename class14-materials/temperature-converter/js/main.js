document.querySelector('#convert').addEventListener('click', converTemp)

function converTemp() {
    let temp = document.querySelector('#celTemp').value
    temp = temp * 9 / 5 + 32
    document.querySelector('#farTemp').innerText = temp
}