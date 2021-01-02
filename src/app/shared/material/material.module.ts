import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, MatTableModule, MatToolbarModule
  ],
  exports: [MatButtonModule, MatTableModule, MatToolbarModule]
})
export class MaterialModule { }
