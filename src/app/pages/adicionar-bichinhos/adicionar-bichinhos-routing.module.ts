import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarBichinhosPage } from './adicionar-bichinhos.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarBichinhosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarBichinhosPageRoutingModule {}
