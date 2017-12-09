import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// import { NewsOrder } from '../model/newsOrder';

import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';
/*
  Generated class for the NewsStorage provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewsStorage {
  // public getValue: any;
  // private newsOrderList: NewsOrder[] = [];
  constructor( private navtiveStorage: NativeStorage, private storage: Storage) {
    //this.newsOrderList.push(new NewsOrder('abc-news-au','ABC News (AU)',  'book'));
    //this.newsOrderList.push(new NewsOrder('al-jazeera-english','Al Jazeera English', 'book'));
    //this.newsOrderList.push(new NewsOrder('ars-technica','Ars Technica','desktop' ));
    //this.setItem('news-order-list',this.newsOrderList);
  }
  // setItem(key: string, value: any): void {
  //   this.navtiveStorage.setItem(key, value).then(
  //     (val) => console.log('Stored item!' + val),
  //     error => console.error('Error storing item', error)
  //   );;
  // }
  // getItem(key: string): any {
  //   this.navtiveStorage.getItem(key).then(
  //     data => console.log(data),
  //     error => console.error(error)
  //   );
  //   return "";
  // }
  // removeItem(key: string): void {
  //   this.navtiveStorage.remove(key);
  // }

  setItem(key: string, value: any): void {
    this.storage.set(key, value);
  }
  getItem(key: string): Promise<any> {
    return this.storage.get(key);
  }
  removeItem(key: string): void {
    this.storage.remove(key);
  }


}
