import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderPageRoutingModule } from './order-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ComponentsModule } from 'src/app/components/components.module';
import { OrderPage } from './order.page';
import { OrderAddmissionComponent } from './order-addmission/order-addmission.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderPageRoutingModule,
    ComponentsModule,
    Ng2SearchPipeModule
  ],
  declarations: [OrderPage, OrderAddmissionComponent]
})
export class OrderPageModule {}
