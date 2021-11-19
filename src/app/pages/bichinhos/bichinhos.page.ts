import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bichinhos',
  templateUrl: './bichinhos.page.html',
  styleUrls: ['./bichinhos.page.scss'],
})
export class BichinhosPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  showPageAdc(){
    this.navCtrl.navigateForward('adicionar-bichinhos')
  }

}
