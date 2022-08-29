import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectionPage } from './connection.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectionPage
  },
  {
    path: 'register',
    loadChildren: () => import('./company-register/company-register.module').then( m => m.CompanyRegisterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectionPageRoutingModule {}
