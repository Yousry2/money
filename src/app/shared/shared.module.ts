import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RightOverlayComponent } from './right-overlay/right-overlay.component';



@NgModule({
  declarations: [RightOverlayComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports : [MaterialModule, RightOverlayComponent]
})
export class SharedModule { }
