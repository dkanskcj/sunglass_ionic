import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailItemsPageRoutingModule } from './detail-items-routing.module';

import { DetailItemsPage } from './detail-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailItemsPageRoutingModule
  ],
  declarations: [DetailItemsPage]
})
export class DetailItemsPageModule {}
