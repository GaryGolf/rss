import axios from 'axios'
const URL = require('url-parse')

async function getLinks(url:string){
    const origin = URL(url).origin+'/'
    const options = {
        url: 'https://cors-anywhere.herokuapp.com/'+url,
        method: 'GET',
        crossDomain: true
    }

    try {
        const response = await axios(options)
        return response.data.match(/\bhref="[^"]+"/gi)
            .sort(str=>str.includes('rss')?0:1)
            .slice(0,20)
            .map(str=>str.substring(6,str.length-1))
            .map(str=>str.startsWith('http')? str : str.startsWith('/')? origin+str.substring(1) : origin+str)
    } catch(error){
        throw error
    }
}

export async function fetchFeed(url:string){
    const options = {
        url: `https://api.rss2json.com/v1/api.json?rss_url=${url}&api_key=dyvockyq1b7wwaxt1uasnkbh4d4apsugyqivca98`,
        method:'GET',
        crossDomain: true
    } 
    
    try {
        const response = await axios(options)
        return response.data
    } catch(error) {
        throw error
    }
}

export async function fetchLinks(url:string){

    let i = 0
    const links = await getLinks(url) as string[]
    links.unshift(url)
    while(true) {
        const feed = await fetchFeed(links[i++])
        if(feed.status == 'ok') return feed
        else if(i>links.length) return {status: 'error', message: 'cant find rss feed'}
    }
}