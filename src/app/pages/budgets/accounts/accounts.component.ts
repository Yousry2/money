import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Account } from '../../../core/models';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AccountsApiService } from '../../../core/api/accounts-api.service';
import { AccountDetailsComponent } from '../account-details/account-details.component';
import { RightOverlayComponent } from '../../../shared/right-overlay/right-overlay.component';
import { BasicComponent } from '../../../shared/basic/basic.component';

@Component({
  selector: 'money-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent extends BasicComponent implements OnInit {

  @ViewChild('accountDetails') accountDetails!: AccountDetailsComponent;
  @ViewChild('rightOverlay') rightOverlay!: RightOverlayComponent;
  dataSource = new MatTableDataSource<Account>();
  displayedColumns: string[] = [];
  budgetId!: string;
  public pageName = 'Accounts';
  constructor(private accountsApiService: AccountsApiService, private route: ActivatedRoute, public injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe((paramMap: ParamMap) => {
      this.budgetId = paramMap.get('budgetId')!;
      this.refresh();
    });

  }


  refresh() {
    this.displayedColumns = ['id', 'name', 'on_budget', 'type', 'balance', 'cleared_balance', 'uncleared_balance'];
    if (this.budgetId != null)
      this.accountsApiService.getAccounts(this.budgetId).subscribe(
        (accounts: any) => this.dataSource.data = accounts
      );
  }

  addNewAccount() {
    this.accountDetails.init();
    this.rightOverlay.open();
  }

  closeRightOverlay() {
    this.rightOverlay.close();
  }

  onAddNewAccountSuccess() {
    this.rightOverlay.close();
    this.refresh();

  }

}
