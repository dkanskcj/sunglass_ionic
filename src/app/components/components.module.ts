import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentComponent } from './segment/segment.component';
import { ButtonsComponent } from './buttons/buttons.component';

const components = [
  SegmentComponent,
  ButtonsComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class ComponentsModule { }
