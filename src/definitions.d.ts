declare interface Action {
    type: string
    payload?: any
}

declare interface FeedHeader {
    author: string
    description: string
    image: string
    link: string
    title: string
    url: string
}

declare interface FeedItem {
    author: string
    content: string
    description: string
    guid: string
    link: string
    pubDate: string
    thumbnail: string
    title: string
    categories: Array<string>
    enclosure: Array<any>
}

declare interface FeedState {
    feed: FeedHeader
    items: Array<FeedItem>
}