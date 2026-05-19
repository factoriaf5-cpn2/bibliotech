import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-r-form',
  imports: [ReactiveFormsModule],
  templateUrl: './customer-r-form.html',
  styleUrl: './customer-r-form.css',
})
export class CustomerRForm {
  private formBuilder = inject(FormBuilder);

  protected loyaltyOptions = ['bronze', 'silver', 'gold', 'platinum', 'VIP'];
  protected stateOptions = ['active', 'inactive'];

  protected customerForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+()\-\s]{7,20}$/)]],
    address: ['', Validators.required],
    loyalty: ['bronze'],
    state: ['active'],
    image: [''],
  });

  protected onSubmit(): void {
    if (this.customerForm.invalid) {
      this.customerForm.markAllAsTouched();
      return;
    }

    console.log('Customer form submitted', this.customerForm.value);
  }

}
