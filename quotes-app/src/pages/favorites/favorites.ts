import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes.service";
import {QuotePage} from "../quote/quote";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private quoteService: QuotesService,
              private modalController: ModalController
              ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillEnter(){
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote){
    const modal = this.modalController.create(QuotePage,{quote: quote} );
    modal.present();
  }

}
