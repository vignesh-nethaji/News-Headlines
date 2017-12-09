export class NewsFeedModel {
    constructor(public author: string,public title:string, public description: string, public url: string, public urlToImage: string, public publishedAt: string) {

    }
    
}
export class NewsFeedArticles {
    constructor() {

    }
    status:string;
    source:string;
    sortBy:string;
    articles:Array<NewsFeedModel>;
}