import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'money-right-overlay',
  templateUrl: './right-overlay.component.html',
  styleUrls: ['./right-overlay.component.scss']
})
export class RightOverlayComponent implements OnInit {


  @Input() mainPageContent?: TemplateRef<any>;
  @Input() rightOverlayContent?: TemplateRef<any>;
  @ViewChild('matDrawer') matDrawerElement? : MatDrawer;
  constructor() { }

  ngOnInit(): void {
  }
  
  public open(){
    this.matDrawerElement?.open();
  };
}
