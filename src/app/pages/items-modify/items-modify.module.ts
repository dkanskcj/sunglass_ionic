import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsModifyPageRoutingModule } from './items-modify-routing.module';

import { ItemsModifyPage } from './items-modify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsModifyPageRoutingModule
  ],
  declarations: [ItemsModifyPage]
})
export class ItemsModifyPageModule {}
