import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bichinhos',
    pathMatch: 'full'
  },
  
  {
    path: 'bichinhos',
    loadChildren: () => import('./pages/bichinhos/bichinhos.module').then( m => m.BichinhosPageModule)
  },
  {
    path: 'adicionar-bichinhos',
    loadChildren: () => import('./pages/adicionar-bichinhos/adicionar-bichinhos.module').then( m => m.AdicionarBichinhosPageModule)
  },
  {
    path: 'desenvolvedores',
    loadChildren: () => import('./pages/desenvolvedores/desenvolvedores.module').then( m => m.DesenvolvedoresPageModule)
  },
  {
    path: 'favs',
    loadChildren: () => import('./pages/favs/favs.module').then( m => m.FavsPageModule)
  },
  {
    path: 'sobrenos',
    loadChildren: () => import('./pages/sobrenos/sobrenos.module').then( m => m.SobrenosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
