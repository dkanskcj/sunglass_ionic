import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockDetailPageRoutingModule } from './stock-detail-routing.module';

import { StockDetailPage } from './stock-detail.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockDetailPageRoutingModule,
    Ng2SearchPipeModule,
  ],
  declarations: [StockDetailPage]
})
export class StockDetailPageModule {}
