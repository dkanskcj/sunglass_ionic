import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExchangePageRoutingModule } from './exchange-routing.module';

import { ExchangePage } from './exchange.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ExchangeAddmissionComponent } from './exchange-addmission/exchange-addmission.component';
import { ExchangeAllCheckedComponent } from './exchange-all-checked/exchange-all-checked.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExchangePageRoutingModule,
    ComponentsModule,
    Ng2SearchPipeModule
  ],
  declarations: [ExchangePage, ExchangeAddmissionComponent, ExchangeAllCheckedComponent]
})
export class ExchangePageModule {}
