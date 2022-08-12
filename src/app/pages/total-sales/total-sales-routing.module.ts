import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalSalesPage } from './total-sales.page';

const routes: Routes = [
  {
    path: '',
    component: TotalSalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalSalesPageRoutingModule {}
