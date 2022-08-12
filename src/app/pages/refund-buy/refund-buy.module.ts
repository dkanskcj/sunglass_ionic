import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefundBuyPageRoutingModule } from './refund-buy-routing.module';

import { RefundBuyPage } from './refund-buy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefundBuyPageRoutingModule
  ],
  declarations: [RefundBuyPage]
})
export class RefundBuyPageModule {}
