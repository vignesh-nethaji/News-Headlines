import { Component } from '@angular/core';
import { NavController, NavParams,reorderArray ,Nav } from 'ionic-angular';
import { NewsStorage } from '../../providers/news-storage';
import { NewsOrder } from '../../model/newsOrder';
import { NewsList } from '../../pages/news-list/news-list';
import { NewsFeedPage } from '../../pages/news-feed/news-feed';
/**
 * Generated class for the NewsFavourites page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-news-favourites',
  templateUrl: 'news-favourites.html',
})
export class NewsFavourites {
  // private newSelectedNews: NewsOrder[];
  // private removedNews: NewsOrder[];
  private selectedNews: NewsOrder[];
  private reorder : boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public newsStorage: NewsStorage,public nav: Nav) {
    this.reorder =false;
    this.selectedNews = <NewsOrder[]>navParams.get('item');
    // this.removedNews = <NewsOrder[]>navParams.get('removedNews');
    // this.newsStorage.getItem('news-order-list').then((value) => {
    //   this.selectedNews = <NewsOrder[]>value;
    //   for (let i = 0; i < this.removedNews.length; i++) {
    //     //for (let j = 0; j < this.selectedNews.length; j++) {
    //       //if (this.removedNews[i] == this.selectedNews[j].newsId) {
    //         this.selectedNews.splice(this.selectedNews.indexOf(this.removedNews[i]), 1);
    //         //break;
    //       //}
    //     //}
    //   }
     
    //   // let selectedNewsCount = this.selectedNews.length;
    //   //for (let j = 0; j < this.newSelectedNews.length; j++) {
    //     // this.selectedNews.push({this.newSelectedNews[j].newsId,newsName :this.newSelectedNews[j].newsName,newsCat :this.newSelectedNews[j].newsCat});
    //     this.selectedNews = Object.assign([], this.newSelectedNews);
    //     // selectedNewsCount = selectedNewsCount++;
    //   //}      
    // });    
  }
  reorderNews(newsIndeies)
  {
    
    // let element = this.selectedNews[newsIndeies.from];
    // this.selectedNews.splice(newsIndeies.from, 1);
    // this.selectedNews.splice(newsIndeies.to, 0, element);
    this.selectedNews = reorderArray(this.selectedNews, newsIndeies)
  }
  goToList()
  {
     this.nav.setRoot(NewsList, { }, { animate: true });
  }
  removeNews(selectedNew) : void
  {
    this.selectedNews.splice(this.selectedNews.indexOf(selectedNew),1)
  }
  updateNews()
  {
    this.newsStorage.removeItem('news-order-list');
    this.newsStorage.setItem('news-order-list',this.selectedNews);
    this.nav.setRoot(
      NewsFeedPage,
      {  },
      { animate: true }
    );
  }
}
