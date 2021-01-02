import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, MatTableModule, MatToolbarModule ,  MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  exports: [MatButtonModule, MatTableModule, MatToolbarModule]
})
export class MaterialModule { }
