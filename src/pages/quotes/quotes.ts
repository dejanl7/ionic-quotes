import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})


export class QuotesPage implements OnInit {
    quoteGroup: { category: string, quotes: Quote[], icon: string };

    constructor(private navParams: NavParams) {}

    ngOnInit() {
        this.quoteGroup = this.navParams.data;
        console.log(this.quoteGroup);
    } 

    // Methods
    onAddToFavorite(favQuote: Object) {
        console.log(favQuote);
    }
}
