import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'money-right-overlay',
  templateUrl: './right-overlay.component.html',
  styleUrls: ['./right-overlay.component.scss']
})
export class RightOverlayComponent implements OnInit {


  @Input() mainPageContent?: TemplateRef<any>;
  @Input() rightOverlayContent?: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
