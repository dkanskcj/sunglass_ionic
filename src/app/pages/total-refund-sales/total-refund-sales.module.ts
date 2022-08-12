import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalRefundSalesPageRoutingModule } from './total-refund-sales-routing.module';

import { TotalRefundSalesPage } from './total-refund-sales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalRefundSalesPageRoutingModule
  ],
  declarations: [TotalRefundSalesPage]
})
export class TotalRefundSalesPageModule {}
