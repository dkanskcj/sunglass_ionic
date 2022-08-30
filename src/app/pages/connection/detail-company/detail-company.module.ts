import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCompanyPageRoutingModule } from './detail-company-routing.module';

import { DetailCompanyPage } from './detail-company.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCompanyPageRoutingModule
  ],
  declarations: [DetailCompanyPage]
})
export class DetailCompanyPageModule {}
