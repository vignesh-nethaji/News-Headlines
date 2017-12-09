import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsFeedPage } from './news-feed';

@NgModule({
  declarations: [
    NewsFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsFeedPage),
  ],
  exports: [
    NewsFeedPage
  ]
})
export class NewsFeedPageModule {}
