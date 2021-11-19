import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BichinhosPage } from './bichinhos.page';

const routes: Routes = [
  {
    path: '',
    component: BichinhosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BichinhosPageRoutingModule {}
