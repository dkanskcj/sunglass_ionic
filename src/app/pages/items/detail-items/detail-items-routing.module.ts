import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailItemsPage } from './detail-items.page';

const routes: Routes = [
  {
    path: '',
    component: DetailItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailItemsPageRoutingModule {}
