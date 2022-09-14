import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesRefundDetailssssPageRoutingModule } from './sales-refund-detailssss-routing.module';

import { SalesRefundDetailssssPage } from './sales-refund-detailssss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesRefundDetailssssPageRoutingModule
  ],
  declarations: [SalesRefundDetailssssPage]
})
export class SalesRefundDetailssssPageModule {}
