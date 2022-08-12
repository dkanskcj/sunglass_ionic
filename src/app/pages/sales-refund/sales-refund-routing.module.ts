import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesRefundPage } from './sales-refund.page';

const routes: Routes = [
  {
    path: '',
    component: SalesRefundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRefundPageRoutingModule {}
