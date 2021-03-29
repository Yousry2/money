import { Component, OnInit, Injector } from '@angular/core';
import { PageSetupService } from '../../core/basic/page-setup.service';

@Component({
  selector: 'money-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  pageSetupService!: PageSetupService;

  public pageName!: string;
  constructor(public injector: Injector) {
    setTimeout(() => {
      this.pageSetupService = this.injector.get(PageSetupService);
      this.pageSetupService.setPageName(this.pageName);
    })

  }


  ngOnInit(): void {
    this.pageSetupService = this.injector.get(PageSetupService);
    this.pageSetupService.setPageName(this.pageName);
  }

}
