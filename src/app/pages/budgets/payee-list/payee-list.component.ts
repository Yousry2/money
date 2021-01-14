import { Component, OnInit } from '@angular/core';
import { Payee } from '../../../core/models';
import { MatTableDataSource } from '@angular/material/table';
import { PayeessApiService } from '../../../core/api';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-payee-list',
  templateUrl: './payee-list.component.html',
  styleUrls: ['./payee-list.component.scss']
})
export class PayeeListComponent implements OnInit {

 

  dataSource = new MatTableDataSource<Payee>();
  displayedColumns = [];
  budgetId: string;
  constructor(private payeeApiService: PayeessApiService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.parent.parent.paramMap.subscribe((paramMap: ParamMap) => {
      this.budgetId = paramMap.get('budgetId');
      this.refresh();
    });

  }


  refresh() {
    this.displayedColumns = ['id', 'name', 'transfer_account_id', 'transactions'];
    this.payeeApiService.getPayees(this.budgetId).subscribe(
      (payees: Payee[]) => this.dataSource.data = payees
    );
  }


}
