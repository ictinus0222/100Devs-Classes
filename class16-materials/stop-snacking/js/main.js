//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', stopSnackingGurll)

function stopSnackingGurll () {
    const num = Number(document.querySelector('input').value)
    document.querySelector('#stops').innerText = ""
    for (let i = 0; i < num; i++) {
        document.querySelector('#stops').innerText += 'STOP SNACKING GURLLLL!!!\n'
    }
}