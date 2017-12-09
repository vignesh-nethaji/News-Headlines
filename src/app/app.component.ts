import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { NewsList } from '../pages/news-list/news-list';
import { NewsFeedPage } from '../pages/news-feed/news-feed';
import { NewsStorage } from '../providers/news-storage';
// import { News2Page } from '../pages/news2/news2';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,newsStorage : NewsStorage) {
   newsStorage.getItem('news-order-list').then((val)=> {
       if(val != null && val != undefined)
       {
          this.rootPage = NewsFeedPage;
       }
       else
       {
          this.rootPage = NewsList;
       }
   });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

