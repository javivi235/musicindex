import fetch from 'node-fetch';

const ITunesURL = "https://itunes.apple.com/entity=musicVideo&search?term="

async function searchSong(data){

    const url = new URL("https://itunes.apple.com/search")
    const params = { term: data, entity:"song" }
    url.search = new URLSearchParams(params)
    
    return await fetch(url, { method: 'POST' })
    .then(results => results.json())
    .then(results => results.results)
    .catch(e => console.log(e))

}

export { searchSong }