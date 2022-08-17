import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FileUploadModule } from 'ng2-file-upload';

import { ItemsModifyPageRoutingModule } from './items-modify-routing.module';

import { ItemsModifyPage } from './items-modify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsModifyPageRoutingModule,
    FileUploadModule,
  ],
  declarations: [ItemsModifyPage]
})
export class ItemsModifyPageModule {}
