import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsPage } from './items.page';

const routes: Routes = [
  {
    path: '',
    component: ItemsPage,
  // children: [
  //   {
  //     path: 'register',
  //     loadChildren: () => import('../items-register/items-register.module').then(m => m.ItemsRegisterPageModule)
  //   }
  // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsPageRoutingModule {}
