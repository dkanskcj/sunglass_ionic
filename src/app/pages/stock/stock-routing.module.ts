import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockPage } from './stock.page';

const routes: Routes = [
  {
    path: '',
    component: StockPage
  },
  {
    path: 'detail',
    loadChildren: () => import('./stock-detail/stock-detail.module').then(m=>m.StockDetailPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./stock-detail/stock-detail.module').then(m=>m.StockDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockPageRoutingModule {}
