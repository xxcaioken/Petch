import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarBichinhosPageRoutingModule } from './adicionar-bichinhos-routing.module';

import { AdicionarBichinhosPage } from './adicionar-bichinhos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarBichinhosPageRoutingModule
  ],
  declarations: [AdicionarBichinhosPage]
})
export class AdicionarBichinhosPageModule {}
