import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgImageSliderModule } from 'ng-image-slider';
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
    NgImageSliderModule,
  ],
  declarations: [ItemsModifyPage]
})
export class ItemsModifyPageModule {}
