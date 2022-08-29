import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectionPageRoutingModule } from './connection-routing.module';

import { ConnectionPage } from './connection.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectionPageRoutingModule,
    Ng2SearchPipeModule,
    ComponentsModule
  ],
  declarations: [ConnectionPage]
})
export class ConnectionPageModule {}
