import { Component } from "@angular/core";
import { NavController, NavParams, Nav } from "ionic-angular";

import { newsListModel } from "../../model/newsListModel";
import { newsListFullModel } from "../../model/newsListFullModel";
import { NewsApi } from "../../providers/news-api";
import { NewsStorage } from "../../providers/news-storage";
// import { Http } from '@angular/http';
import { NewsDetail } from "../../pages/news-detail/news-detail";
import { NewsFavourites } from "../../pages/news-favourites/news-favourites";

import { NewsOrder } from "../../model/newsOrder";
// import { Storage } from '@ionic/storage';

/**
 * Generated class for the NewsList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: "page-news-list",
  templateUrl: "news-list.html"
})
export class NewsList {
 public searchText:string ="";
  public newsListDatas: newsListModel[];

  public selectedNews: NewsOrder[];
  // public oldNews: NewsOrder[];
  // public removedNews:  NewsOrder[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public nav: Nav,
    public newsApi: NewsApi,
    public newsStorage: NewsStorage
  ) {
    // this.newsStorage.setItem('key', 'value1');
    // this.newsStorage.getItem('key').then((data) => {
    //   console.log(data);
    // });
    // this.newsStorage.removeItem('key');
    // this.newsStorage.getItem('key').then((data) => {
    //   console.log(data);
    // });
    let self = this;
    // this.selectedNews = ['abc-news-au', 'al-jazeera-english', 'ars-technica'];
    this.newsStorage.getItem("news-order-list").then(val => {
      self.selectedNews = (val == null || val == undefined)  ? [] : <NewsOrder[]>val;
      // self.selectedNews = value.map(function (a) {
      //   return new NewsOrder(a.newsId, a.newsName,a.newsIcon);
      // });
      // this.oldNews = Object.assign([], self.selectedNews);
      // this.removedNews = [];
      this.newsApi.newsSources().subscribe(
        data => {
          if (data.status == "ok") {
            data.sources.forEach(function(element) {
              element.iconName = self.newsApi.iconName(element.category);
              //if (self.selectedNews != undefined) {
                if(self.selectedNews.findIndex(x => x.newsId == element.id) != -1)
                {
                    element.newsChoose = true;
                }
                else
                {
                    element.newsChoose = false;
                }
                // for (var i = 0; i < self.selectedNews.length; i++) {
                //   if (self.selectedNews[i].newsId == element.id) {
                //     element.newsChoose = true;
                //     break;
                //   } else {
                //     element.newsChoose = false;
                //   }
                // }
              //}
            });
            this.newsListDatas = data.sources;
          }
        },
        error => {
          console.log(error);
        }
      );
    });
  }
  ionViewDidLoad() {
  }
  // iconName(category: string): string {
  //   return this.newsApi.iconName(category);
  // }
  selectNews(item: newsListFullModel) {   
    item.newsChoose = !item.newsChoose;
    var curItem =new NewsOrder(item.id,item.name,item.iconName);    
    let index = this.selectedNews.findIndex(x => x.newsId == item.id);
    if (index != -1) {
      this.selectedNews.splice(index, 1);
    } else {
      this.selectedNews.push(curItem);
    }
    // index = this.oldNews.indexOf(curItem);
    // if (index != -1) {
    //   let index = this.removedNews.indexOf(curItem);
    //   if (index != -1) {
    //     this.removedNews.splice(index, 1);
    //   }
    //   else {
    //     this.removedNews.push(curItem);
    //   }
    // }
  }
  detailView(item: newsListModel) {
    this.navCtrl.push(NewsDetail, { item: item }, { animate: true });
  }
  favourites() {
    // let newsList: Array<string>;
    // let clone = Object.assign([], this.selectedNews);
    // for (let i = 0; i < clone.length; i++) {
    //   let index = this.oldNews.indexOf(clone[i]);
    //   if (index != -1) {
    //     let newsIndex = this.selectedNews.indexOf(clone[i]);
    //     this.selectedNews.splice(newsIndex, 1);
    //   }
    // }
    this.nav.setRoot(
      NewsFavourites,
      { item: this.selectedNews },
      { animate: true }
    );
  }
}
