import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsPage } from './items.page';

const routes: Routes = [
  {
    path: '',
    component: ItemsPage,
  },
  {
    path: 'details',
    loadChildren: () => import('./detail-items/detail-items.module').then( m => m.DetailItemsPageModule)
  },
  {
    path: 'modify',
    loadChildren: () => import('../items-modify/items-modify.module').then(m=>m.ItemsModifyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsPageRoutingModule {}
