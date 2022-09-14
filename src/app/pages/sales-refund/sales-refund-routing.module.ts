import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesRefundPage } from './sales-refund.page';

const routes: Routes = [
  {
    path: '',
    component: SalesRefundPage
  },
  {
    path: ':refundName',
    loadChildren: () => import('./sales-refund-detail/sales-refund-detail.component').then(m=>m.SalesRefundDetailComponent)
  },
  {
    path: ':refundName',
    loadChildren: () => import('./sales-refund-detailssss/sales-refund-detailssss.module').then( m => m.SalesRefundDetailssssPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRefundPageRoutingModule {}
