import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsFavourites } from './news-favourites';

@NgModule({
  declarations: [
    NewsFavourites,
  ],
  imports: [
    IonicPageModule.forChild(NewsFavourites),
  ],
  exports: [
    NewsFavourites
  ]
})
export class NewsFavouritesModule {}
