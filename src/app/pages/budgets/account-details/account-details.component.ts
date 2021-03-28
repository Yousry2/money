import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AccountTypes } from '../../../core/data';
import { AccountDetails } from '../../../core/models';
import { AccountsApiService } from '../../../core/api/accounts-api.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'money-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  showForm : boolean = true;
  accountTypeList = AccountTypes;
  @Input('budgetId') budgetId!: string;
  @Output('onCreateAccountSuccess') onCreateAccountSuccess: EventEmitter<any>=  new EventEmitter<any>();;
  @Output('onCreateAccountFail') onCreateAccountFail: EventEmitter<any>=  new EventEmitter<any>();;
  @Output('onCancel') onCancel: EventEmitter<any>=  new EventEmitter<any>();;
  accountDetailsForm = this.fb.group({
    name: [null,
      Validators.compose([
        Validators.required, Validators.minLength(0), Validators.maxLength(40)
      ])],
    type: [null,
      Validators.compose([
        Validators.required, Validators.minLength(0), Validators.maxLength(40)
      ])
    ],
    balance: [null,
      Validators.compose([
        Validators.required, Validators.minLength(0), Validators.maxLength(10)
      ])
    ]
  });


  constructor(private fb: FormBuilder, private accountApiService: AccountsApiService) { }

  ngOnInit(): void {
    this.reset();
  }


  init(): void {
    this.reset();
  }

  reset() {
    
    this.accountDetailsForm.reset();
    this.showForm = false;
    setTimeout(() => {
      this.showForm=true;
    })
  }

  cancel(){
    this.onCancel.emit('');
  }


  onSubmit() {
    if (this.accountDetailsForm.valid) {
      let accountDetails: AccountDetails = new AccountDetails();
      accountDetails.name = this.accountDetailsForm.value['name'];
      accountDetails.type = this.accountDetailsForm.value['type'];
      accountDetails.balance = this.accountDetailsForm.value['balance'];
      this.accountApiService.createAccount(this.budgetId, accountDetails)
        .subscribe(
          (account) => {
            this.onCreateAccountSuccess.emit('');
          }
        );
    }
  }

}
