import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsComponent } from './buttons/buttons.component';
import { NoInputComponent } from './no-input/no-input.component';
import { PagerComponent } from './pager/pager.component';
import { SegmentComponent } from './segment/segment.component';
import { TablesComponent } from './tables/tables.component';
import { TextInputComponent } from './text-input/text-input.component';

const components = [
  SegmentComponent,
  ButtonsComponent,
  TablesComponent,
  NoInputComponent,
  TextInputComponent,
  PagerComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class ComponentsModule { }
