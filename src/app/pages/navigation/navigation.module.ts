import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [SideNavComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule
  ],
  exports:[SideNavComponent]
})
export class NavigationModule { }
