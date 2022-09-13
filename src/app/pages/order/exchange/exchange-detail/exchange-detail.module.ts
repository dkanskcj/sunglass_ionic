import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExchangeDetailPageRoutingModule } from './exchange-detail-routing.module';

import { ExchangeDetailPage } from './exchange-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExchangeDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ExchangeDetailPage]
})
export class ExchangeDetailPageModule {}
