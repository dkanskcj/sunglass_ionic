import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyRegisterPageRoutingModule } from './company-register-routing.module';

import { CompanyRegisterPage } from './company-register.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CompanyRegisterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CompanyRegisterPage]
})
export class CompanyRegisterPageModule {}
