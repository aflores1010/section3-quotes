import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {AlertController} from "ionic-angular";
import {QuotesService} from "../../services/quotes.service";



@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  public quoteGroup: {category:string, quotes: Quote[], icon: string}[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertController: AlertController,
              private quoteService: QuotesService
  ) {
  }

  ionViewWillLoad() {
    this.quoteGroup = this.navParams.data;
  }

  addToFavorite(selectedQuote: Quote){
      const alert = this.alertController.create({
        title:'Add Quote',
        subTitle: 'Are you sure?',
        message: 'Are you sure you want to add the quote?',
        buttons: [
          {
            text: 'Yes, Go Ahead',
            handler: () => {
              this.quoteService.addFavoriteQuote(selectedQuote);
            }
          },
          {
            text: 'No, I change mi mind',
            role:'cancel',
            handler: () => {
                  console.log('Nop');
          }
          }
        ]
      });

      alert.present();
  }

}
