import { Component, OnInit, Injector } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Transaction } from '../../../core/models';
import { TransactionsApiService } from '../../../core/api/transactions-api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BasicComponent } from '../../../shared/basic/basic.component';

@Component({
  selector: 'money-payee-transactions',
  templateUrl: './payee-transactions.component.html',
  styleUrls: ['./payee-transactions.component.scss']
})
export class PayeeTransactionsComponent extends BasicComponent implements OnInit {

  dataSource = new MatTableDataSource<Transaction>();
  displayedColumns: string[] = [];
  budgetId!: string;
  payeeId!: string;
  pageName ="Transactions";
  constructor(private transactionApiService: TransactionsApiService, private route: ActivatedRoute, public injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.payeeId = paramMap.get('payeeId')!;
      this.budgetId = paramMap.get('budgetId')!;
      this.refresh();
    });

  }


  refresh() {
    this.displayedColumns = ['id', 'date', 'amount', 'cleared', 'flag_color', 'account_name', 'payee_name'];
    if (this.budgetId != null)
      this.transactionApiService.getPayeesTransactions(this.budgetId, this.payeeId).subscribe(
        (transactions: any) => this.dataSource.data = transactions
      );
  }

}
