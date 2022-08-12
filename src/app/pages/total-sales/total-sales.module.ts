import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalSalesPageRoutingModule } from './total-sales-routing.module';

import { TotalSalesPage } from './total-sales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalSalesPageRoutingModule
  ],
  declarations: [TotalSalesPage]
})
export class TotalSalesPageModule {}
