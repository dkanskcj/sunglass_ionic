import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsPageRoutingModule } from './items-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ItemsPage } from './items.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsPageRoutingModule,
    Ng2SearchPipeModule,
    ComponentsModule
  ],
  declarations: [ItemsPage]
})
export class ItemsPageModule {}
