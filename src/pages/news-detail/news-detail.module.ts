import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsDetail } from './news-detail';

@NgModule({
  declarations: [
    NewsDetail,
  ],
  imports: [
    IonicPageModule.forChild(NewsDetail),
  ],
  exports: [
    NewsDetail
  ]
})
export class NewsDetailModule {}
