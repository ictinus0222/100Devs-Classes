//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=xyjTXp8VuENQLkgy7BKKcuctetrnlrgAs7A1CzYf&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        if(data.media_type == "image"){
          document.querySelector('img').src = data.hdurl
        } else if (data.media_type = "video") {
          document.querySelector('iframe').src = data.url
          document.querySelector('img').display = "none"
        }
        console.log(data)
        
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

