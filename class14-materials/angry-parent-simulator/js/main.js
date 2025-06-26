document.getElementById('yell').addEventListener('click', function() {
    const firstName = document.getElementById('firstName').value;
    const firstMiddle = document.getElementById('firstMiddle').value;
    const lastMiddle = document.getElementById('lastMiddle').value;
    const lastName = document.getElementById('lastName').value;

    const fullName = `${firstName} ${firstMiddle} ${lastMiddle} ${lastName}`;
    document.getElementById('placeToYell').innerText = `YOU DONE MESSED UP, ${fullName.toUpperCase()}!`;
});