import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsRegisterPageRoutingModule } from './items-register-routing.module';

import { ItemsRegisterPage } from './items-register.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ItemsRegisterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ItemsRegisterPage]
})
export class ItemsRegisterPageModule {}
