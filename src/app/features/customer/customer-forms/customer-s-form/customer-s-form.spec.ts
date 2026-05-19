import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSForm } from './customer-s-form';

describe('CustomerSForm', () => {
  let component: CustomerSForm;
  let fixture: ComponentFixture<CustomerSForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerSForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerSForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
