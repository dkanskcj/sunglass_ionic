import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentComponent } from './segment/segment.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { NoInputComponent } from './no-input/no-input.component';
import { TextInputComponent } from './text-input/text-input.component';
import { PagerComponent } from './pager/pager.component';

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
