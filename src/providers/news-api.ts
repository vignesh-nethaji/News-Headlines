import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { newsListModels } from '../model/newsListModels';
import { NewsFeedArticles } from '../model/newsFeedModel';
// import { newsListFullModel } from '../model/newsListFullModel';


/*
  Generated class for the NewsApi provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewsApi {
private primaryURL ="https://newsapi.org/v1";
private apiKey = "54885da1f8e34ab4bafae114d823773b";
  constructor(private http: Http) {
   
  }
   
  //  newsSources()
  //  {
  //    return this.http.get(`${this.primaryURL}/sources`).map(res =>res.json());
  //  }

  newsSources(): Observable<newsListModels> {
    return this.http.get(`${this.primaryURL}/sources`)
                    .map(res => <newsListModels>(res.json()))
                    .catch(this.handleError);
  };
  GetNewsById(id:string) : Observable<NewsFeedArticles>
  {
    let url  = this.primaryURL+"/articles?source="+id+"&apiKey="+this.apiKey;
      return this.http.get(url)
                      .map(res => <NewsFeedArticles>(res.json()))
                      .catch(this.handleError);
  };
  iconName(category: string): string {
    let name: string;
    switch (category) {
      case 'entertainment': {
        name = 'film';
        break;
      }
      case "technology": {
        name = 'desktop';
        break;
      }
      case "general": {
        name = 'book';
        break;
      }
      case "business": {
        name = 'cart';
        break;
      }
      case "politics": {
        name = 'body';
        break;
      }
      case "sport": {
        name = 'football';
        break;
      }
      default: {
        name = 'body';
        break;
      }
    }
    return name;
  };
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    // let errMsg: string;
    // if (error instanceof Response) {
    //   const body = error.json() || '';
    //   const err = body.error || JSON.stringify(body);
    //   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    // } else {
    //   errMsg = error.message ? error.message : error.toString();
    // }
    console.error(error);
    return Observable.throw(error);
  }
}
