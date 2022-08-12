import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefundBuyPage } from './refund-buy.page';

const routes: Routes = [
  {
    path: '',
    component: RefundBuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefundBuyPageRoutingModule {}
