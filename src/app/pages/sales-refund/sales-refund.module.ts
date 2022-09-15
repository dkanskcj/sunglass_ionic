import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesRefundPageRoutingModule } from './sales-refund-routing.module';

import { SalesRefundPage } from './sales-refund.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SalesRefundDetailComponent } from './sales-refund-detail/sales-refund-detail.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { CustomerBurdenComponent } from './customer-burden/customer-burden.component';
import { ShippingCompanyBurdenComponent } from './shipping-company-burden/shipping-company-burden.component';
import { ReasonModalComponent } from './shipping-company-burden/reason-modal/reason-modal.component';
import { ReturnCompanyBurdenComponent } from './return/return-company-burden/return-company-burden.component';
import { ReturnCustomerBurdenComponent } from './return/return-customer-burden/return-customer-burden.component';
import { ReturnCompleteComponent } from './return-complete/return-complete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesRefundPageRoutingModule,
    Ng2SearchPipeModule,
    ComponentsModule
  ],
  declarations: [
    SalesRefundPage,
    ReasonModalComponent, 
    CustomerBurdenComponent, 
    ShippingCompanyBurdenComponent, 
    ReturnCompanyBurdenComponent, 
    ReturnCustomerBurdenComponent, 
    ReturnCompleteComponent]
})
export class SalesRefundPageModule { }
