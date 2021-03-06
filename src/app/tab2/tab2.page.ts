import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Photo, PhotoService } from '../services/photo.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public likes = 0;
  public boolLike = false;

  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController,private alertCtrl: AlertController) {}


  
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

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
         }
      }]
    });
    await actionSheet.present();
  }
}
