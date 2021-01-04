import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss']
})
export class Tab6Page {
  
  public likes = 0;
  public boolLike = false;

  constructor(private alertCtrl: AlertController) {}


  
  async holasoyunafuncion () {

    await this.alertCtrl.create({
      header: "Se ha actualizado el like",
      buttons: [
        {
          text: "Ok", handler: (res) => {
            console.log(res.promo);
          }
        },
      ]
    }).then(res=> res.present());



    if (!this.boolLike) {
      this.likes+=1;
      this.boolLike = true;
    } else {
      this.likes-=1;
      this.boolLike = false;
    }
  }
}
