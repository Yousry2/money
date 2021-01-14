import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Account } from '../../../core/models';
import { AccountsApiService } from '../../../core/api';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {


  dataSource = new MatTableDataSource<Account>();
  displayedColumns = [];
  budgetId: string;
  constructor(private accountsApiService: AccountsApiService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.parent.paramMap.subscribe((paramMap: ParamMap) => {
      this.budgetId = paramMap.get('budgetId');
      this.refresh();
    });

  }


  refresh() {
    this.displayedColumns = ['id', 'name', 'on_budget','type', 'balance', 'cleared_balance', 'uncleared_balance'];
    this.accountsApiService.getAccounts(this.budgetId).subscribe(
      (accounts: any) => this.dataSource.data = accounts
    );
  }

}
