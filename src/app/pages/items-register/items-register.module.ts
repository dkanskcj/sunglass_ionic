import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsRegisterPageRoutingModule } from './items-register-routing.module';

import { ItemsRegisterPage } from './items-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsRegisterPageRoutingModule
  ],
  declarations: [ItemsRegisterPage]
})
export class ItemsRegisterPageModule {}
