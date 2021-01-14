import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeeTransactionsComponent } from './payee-transactions.component';

describe('PayeeTransactionsComponent', () => {
  let component: PayeeTransactionsComponent;
  let fixture: ComponentFixture<PayeeTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayeeTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeeTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
