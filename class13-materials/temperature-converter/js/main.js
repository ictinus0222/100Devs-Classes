//Write your pseduo code first! 
document.querySelector('#convert').addEventListener('click', celToFar)

function celToFar() {

    let temp = document.querySelector('#celTemp').value

    temp = temp * 9/5 + 32

    document.querySelector('#farTemp').innerText = `${temp} Dergee Farenheit`

}