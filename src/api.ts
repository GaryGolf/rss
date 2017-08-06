import axios from 'axios'

export function fetchRSSFeed(url:string){
    const options = {
        url: `https://api.rss2json.com/v1/api.json?rss_url=${url}&api_key=dyvockyq1b7wwaxt1uasnkbh4d4apsugyqivca98`,
        method:'GET',
        crossDomain: true
    }
    return axios(options)
        .then(response => response.data)
        .catch(error => {throw error})
}

export function fetchRSSLinks(url:string){
    const u = url.includes('?')? url.substring(0,url.indexOf('?')): url.endsWith('/')? url:url+'/'
    const options = {
        url: 'https://cors-anywhere.herokuapp.com/'+url,
        method: 'GET',
        crossDomain: true
    }
    return axios(options)
        .then(response => response.data.match(/\bhref="[^"]+"/gi)
            .sort(str=>str.includes('rss')?0:1)
            .slice(0,10)
            .map(str=>str.substring(6,str.length-1))
            .map(str=>str.startsWith('http')? str : str.startsWith('/')? u+str.substring(1) : u+str))
        .catch(error => {throw error})
}
