import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private alertController: AlertController) {}

  //alert 1
  async alert1(){
    const alert=await this.alertController.create({
      header:'Reminder',
      subHeader:'Allstar Classic',
      message:'Basketball Tournament scheduled for September 15, 2024',
      buttons:['OK']
    });
     await alert.present();
  }

  //alert 2
  async alert2(){
    const alert=await this.alertController.create({
      header:'Reminder',
      subHeader:'Premier Invitational',
      message:'Soccer Tournament scheduled for September 30, 2024',
      buttons:['OK']
    });
     await alert.present();
  }

  //alert 3
  async alert3(){
    const alert=await this.alertController.create({
      header:'Reminder',
      subHeader:'Victory Cup',
      message:'Football Tournament scheduled for October 15, 2024',
      buttons:['OK']
    });
     await alert.present();
  }

  //alert 4
  async alert4(){
    const alert=await this.alertController.create({
      header:'Reminder',
      subHeader:'Elite Showcase',
      message:'Baseball Tournament scheduled for October 30, 2024',
      buttons:['OK']
    });
     await alert.present();
  }
}
