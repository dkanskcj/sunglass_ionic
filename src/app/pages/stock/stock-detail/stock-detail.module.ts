import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockDetailPageRoutingModule } from './stock-detail-routing.module';

import { StockDetailPage } from './stock-detail.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ComponentsModule } from 'src/app/components/components.module';
import { AddStockComponent } from '../add-stock/add-stock.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockDetailPageRoutingModule,
    Ng2SearchPipeModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [StockDetailPage, AddStockComponent]
})
export class StockDetailPageModule {}
