import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  //caminho das paginas menu hamburguer
  public appPages = [
    { title: ' bichinhos', url: 'bichinhos', icon: '/assets/icon/paw-outline.svg' },
    { title: 'desenvolvedores', url: 'desenvolvedores', icon: 'assets/paw-outline' },
    { title: 'favs', url: 'favs', icon: 'icon/heart-sharp' },
    { title: 'sobre nós', url: 'sobrenos', icon: 'icon/heart-sharp.svg' },
    { title: 'login', url: 'login', icon: 'icon/heart-sharp.svg' },

  ];
 
  constructor() { }
}
