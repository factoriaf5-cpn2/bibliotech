import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRForm } from './customer-r-form';

describe('CustomerRForm', () => {
  let component: CustomerRForm;
  let fixture: ComponentFixture<CustomerRForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerRForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerRForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
