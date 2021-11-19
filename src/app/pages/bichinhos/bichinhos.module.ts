import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BichinhosPageRoutingModule } from './bichinhos-routing.module';

import { BichinhosPage } from './bichinhos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BichinhosPageRoutingModule
  ],
  declarations: [BichinhosPage]
})
export class BichinhosPageModule {}
