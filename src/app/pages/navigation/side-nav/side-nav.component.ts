import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PageSetupService } from '../../../core/basic/page-setup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'money-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  $pageName!: Observable<string>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private pageSetupService: PageSetupService, private router: Router) {
    this.$pageName = this.pageSetupService.getPageName();
   }

  ngOnInit(): void {
  
  }

  goTo(link : string){
    this.router.navigate([link]);
  }

}
