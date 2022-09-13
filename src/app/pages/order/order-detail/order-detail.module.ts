import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDetailPageRoutingModule } from './order-detail-routing.module';

import { OrderDetailPage } from './order-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RefuseComponent } from './refuse/refuse.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDetailPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [OrderDetailPage, RefuseComponent]
})
export class OrderDetailPageModule {}
