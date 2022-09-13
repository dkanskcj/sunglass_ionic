import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesRefundPageRoutingModule } from './sales-refund-routing.module';

import { SalesRefundPage } from './sales-refund.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesRefundPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SalesRefundPage]
})
export class SalesRefundPageModule {}
