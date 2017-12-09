import { Component } from "@angular/core";
import { NavController, NavParams,Nav,Platform } from "ionic-angular";
import { NewsApi } from "../../providers/news-api";
import { NewsStorage } from "../../providers/news-storage";
import { NewsFeedArticles } from "../../model/newsFeedModel";
import { NewsOrder } from "../../model/newsOrder";
import { InAppBrowser } from 'ionic-native';

import { NewsList } from '../../pages/news-list/news-list';
/**
 * Generated class for the NewsFeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: "page-news-feed",
  templateUrl: "news-feed.html"
})
export class NewsFeedPage {
  public newsFeedArticles: NewsFeedArticles[] = [];
  private newsIds: Array<string> = [];
  constructor(
    public platform: Platform,
    private navCtrl: NavController,
    private navParams: NavParams,
    private nav :Nav,
    private newsApi: NewsApi,
    private newsStorage: NewsStorage
  ) {};

  ionViewDidLoad() {
    this.newsFeedArticles =[];
    this.newsStorage.getItem("news-order-list").then(value => {
      let val = <NewsOrder[]>value;
      val.forEach(element => {
        this.newsIds.push(element.newsId);
        this.newsApi.GetNewsById(element.newsId).subscribe(data => {
          if (data.status == "ok") {
            this.newsFeedArticles.push(data);
          }
        });
      });
    });
  };

  doRefresh(refresher) {  
    let flag =true;
    this.newsIds.forEach(element => {
      this.newsApi.GetNewsById(element).subscribe(data => {
        if (flag)
        {
          this.newsFeedArticles = [];
          flag =false;
        }
        refresher.complete();
        if (data.status == "ok") {
          this.newsFeedArticles.push(data);
        }
      });
    });;
  };
  openUrl(url :string) :void
  {
     this.platform.ready().then(() => {
            let browser = new InAppBrowser(url,'_blank');
        });
  }
  newsEdit()
  {
    this.nav.setRoot(NewsList,{},{animate : true});
  }
  manRefresh() {  
    let flag =true;    
    this.newsIds.forEach(element => {
      this.newsApi.GetNewsById(element).subscribe(data => {
        if (flag)
        {
          this.newsFeedArticles = [];
          flag =false;
        }
        if (data.status == "ok") {
          this.newsFeedArticles.push(data);
        }
      });
    });
  };
}
