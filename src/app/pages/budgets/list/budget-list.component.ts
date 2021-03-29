import { Component, OnInit, Injector } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Budget } from '../../../core/models';
import { BudgetsApiService } from '../../../core/api/budgets-api.service';
import { BasicComponent } from '../../../shared/basic/basic.component';

@Component({
  selector: 'money-budgets',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent extends BasicComponent implements OnInit {

  pageName = "Budgets";
  dataSource = new MatTableDataSource<Budget>();
  displayedColumns: string[] = [];
  constructor(private budgetsApiService: BudgetsApiService, public injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.refresh();
  }


  refresh() {
    this.displayedColumns = ['id', 'name', 'first_month', 'last_month', 'accounts', 'payees'];
    this.budgetsApiService.getBudgets().subscribe((budgets: Budget[]) => this.dataSource.data = budgets);
  }
  /*
    this.dataSource.data = [
      {
        "id": "58479857-74ce-4f86-9d39-07ac9e714d69",
        "name": "My Budget",
        "last_modified_on": new Date("2020-12-21T19:41:33+00:00"),
        "first_month": "2020-12-01",
        "last_month": "2021-01-01",
        "date_format": {
          "format": "MM/DD/YYYY"
        }
      },
      {
        "id": "58479857-74ce-4f86-9d39-07ac9e714d69",
        "name": "My Budget",
        "last_modified_on": new Date("2020-12-21T19:41:33+00:00"),
        "first_month": "2020-12-01",
        "last_month": "2021-01-01",
        "date_format": {
          "format": "MM/DD/YYYY"
        }
      },
      {
        "id": "58479857-74ce-4f86-9d39-07ac9e714d69",
        "name": "My Budget",
        "last_modified_on": new Date("2020-12-21T19:41:33+00:00"),
        "first_month": "2020-12-01",
        "last_month": "2021-01-01",
        "date_format": {
          "format": "MM/DD/YYYY"
        }
      },
      {
        "id": "58479857-74ce-4f86-9d39-07ac9e714d69",
        "name": "My Budget",
        "last_modified_on": new Date("2020-12-21T19:41:33+00:00"),
        "first_month": "2020-12-01",
        "last_month": "2021-01-01",
        "date_format": {
          "format": "MM/DD/YYYY"
        }
      }
    ]
  */
}
