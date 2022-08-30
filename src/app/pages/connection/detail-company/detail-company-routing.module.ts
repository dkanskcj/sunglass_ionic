import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCompanyPage } from './detail-company.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCompanyPageRoutingModule {}
