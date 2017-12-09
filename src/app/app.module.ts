import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { About } from '../pages/about/about';
import { NewsDetail } from '../pages/news-detail/news-detail';
import { NewsFavourites } from '../pages/news-favourites/news-favourites';
import { NewsList } from '../pages/news-list/news-list';
import { NewsFeedPage } from '../pages/news-feed/news-feed';

import { News2Page } from '../pages/news2/news2';

import { NewsApi } from '../providers/news-api';
import { HttpModule } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicStorageModule } from '@ionic/storage';
import { NewsStorage } from '../providers/news-storage';

import { NewsDatePipe } from '../pipes/news-date/news-date';
import { NewsTimeLeftPipe } from '../pipes/news-time-left/news-time-left';
import { CaptitalizeFirstLetterPipe } from '../pipes/captitalize-first-letter/captitalize-first-letter';
import { MathcesCategoryPipe } from '../pipes/mathces-category/mathces-category';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    About,
    NewsDetail,
    NewsFavourites,
    NewsList,
    NewsFeedPage,
    News2Page,
    NewsDatePipe,
    NewsTimeLeftPipe,
    CaptitalizeFirstLetterPipe,
    MathcesCategoryPipe    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    About,
    NewsDetail,
    NewsFavourites,
    NewsList,
    NewsFeedPage,
    News2Page
  ],
  providers: [
    
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NewsApi,
    NewsStorage,
    NativeStorage
    
  ]
})
export class AppModule { }
