let deckId = ""


fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then (res => res.json())
.then (data => {
  console.log(data)
  deckId = data.deck_id
})

document.querySelector('#deal').addEventListener('click', drawTwo)

function drawTwo() {
  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
  .then( res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('#player1').src = data.cards[0].image
    document.querySelector('#player2').src = data.cards[1].image


    const player1Val = convertToNum(data.cards[0].value)
    const player2Val = convertToNum(data.cards[1].value)
    if(player1Val > player2Val){
      document.querySelector('#result').innerText = 'Player 1 Won'
    } else if(player1Val < player2Val){
      document.querySelector('#result').innerText = 'Player 2 Won'
    } else {
      document.querySelector('#result').innerText = 'Match Draw'
    }
  })
}

function convertToNum(val) {
  if(val === 'ACE') {
    return 14
  } else if(val === 'KING') {
    return 13
  } else if(val === 'QUEEN') {
    return 12
  } else if(val === 'JACK') {
    return 11
  } else {
    return val
  }
}
// Reshuffle Logic
document.querySelector('#reshuffle').addEventListener('click', reShuffle)
function reShuffle (){
  const reshuffleUrl = `https://www.deckofcardsapi.com/api/deck/${deckId}/shuffle/?remaining=true`
  fetch (reshuffleUrl)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  drawTwo()
}

document.querySelector('#newDeck').addEventListener('click', getNewDeck)
function getNewDeck() {
  fetch('https://www.deckofcardsapi.com/api/deck/new/')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    deckId = data.deck_id
  })
}