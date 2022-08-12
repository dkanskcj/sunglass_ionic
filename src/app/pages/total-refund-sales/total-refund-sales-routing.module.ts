import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalRefundSalesPage } from './total-refund-sales.page';

const routes: Routes = [
  {
    path: '',
    component: TotalRefundSalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalRefundSalesPageRoutingModule {}
