import axios from 'axios'

export function fetchRSSFeed(url:string){
    const options = {
        url: `https://api.rss2json.com/v1/api.json?rss_url=${url}&api_key=dyvockyq1b7wwaxt1uasnkbh4d4apsugyqivca98`,
        method:'GET'
    }
    return axios(options)
        .then(response => response.data)
        .catch(error => {throw error})
}