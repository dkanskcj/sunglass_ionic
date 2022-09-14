import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesRefundDetailssssPage } from './sales-refund-detailssss.page';

const routes: Routes = [
  {
    path: '',
    component: SalesRefundDetailssssPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRefundDetailssssPageRoutingModule {}
