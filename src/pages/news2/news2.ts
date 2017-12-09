import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


// import { HomePage } from '../../pages/home/home';

import { NewsApi } from '../../providers/news-api';

@Component({
    selector: 'news2',
    templateUrl: 'news2.html'
})
export class News2Page {


    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private newsAPI: NewsApi
    ) {

    }





}
