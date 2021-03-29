import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RightOverlayComponent } from './right-overlay/right-overlay.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BasicComponent } from './basic/basic.component';


@NgModule({
  declarations: [RightOverlayComponent, BasicComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  exports: [MaterialModule, RightOverlayComponent, ReactiveFormsModule]
})
export class SharedModule { }
