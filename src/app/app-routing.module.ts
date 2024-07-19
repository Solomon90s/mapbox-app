import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //! Lo cargamos mediante lazyloading
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then( (m) => m.MapsModule),
  },
  {
    path: '**',
    redirectTo: 'maps',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
