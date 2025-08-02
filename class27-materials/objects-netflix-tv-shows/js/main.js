//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class MakeNetflixTvShows {

    constructor(genre, title, language, format, quality) {
        this.genre = genre
        this.title = title
        this.language = language
        this.format = format
        this.quality = quality
    }

    play() {
        console.log(`Play ${title}`)
    }

    pause() {
        console.log("Pause")
    }

    changeLang() {
        console.log(`${language} to?`)
    }
}

let breakingBad = new MakeNetflixTvShows("Drama", "Breaking Bad", "English", "TV Series", "4k")