import { Component } from '@angular/core';
import {  NavController, NavParams,Platform } from 'ionic-angular';
import { newsListModel } from '../../model/newsListModel';
import { InAppBrowser } from 'ionic-native';
/**
 * Generated class for the NewsDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetail {
selectedItem: newsListModel;
imageUrl :string;
  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams) {
  this.selectedItem =<newsListModel>navParams.get('item');
  this.imageUrl = "https://icons.better-idea.org/icon?url="+this.selectedItem.url+"&size=70..120..200";
 }
openUrl(url :string) :void
  {
     this.platform.ready().then(() => {
            let browser = new InAppBrowser(url,'_blank');
        });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetail');
  }

}
