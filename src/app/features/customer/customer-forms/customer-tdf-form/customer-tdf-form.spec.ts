import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTdfForm } from './customer-tdf-form';

describe('CustomerTdfForm', () => {
  let component: CustomerTdfForm;
  let fixture: ComponentFixture<CustomerTdfForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerTdfForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerTdfForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
