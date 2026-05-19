import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormField, email, form, pattern, required } from '@angular/forms/signals';

interface CustomerSignalFormModel {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  loyalty: 'bronze' | 'silver' | 'gold' | 'platinum' | 'VIP';
  state: 'active' | 'inactive';
  image: string;
}

@Component({
  selector: 'app-customer-s-form',
  imports: [FormField],
  templateUrl: './customer-s-form.html',
  styleUrl: './customer-s-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerSForm {
  protected loyaltyOptions = ['bronze', 'silver', 'gold', 'platinum', 'VIP'] as const;
  protected stateOptions = ['active', 'inactive'] as const;

  protected customerModel = signal<CustomerSignalFormModel>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    loyalty: 'bronze',
    state: 'active',
    image: '',
  });

  protected customerForm = form(this.customerModel, (schemaPath) => {
    required(schemaPath.fullName, { message: 'Full name is required.' });
    required(schemaPath.email, { message: 'Email is required.' });
    email(schemaPath.email, { message: 'Enter a valid email address.' });
    required(schemaPath.phone, { message: 'Phone is required.' });
    pattern(schemaPath.phone, /^[0-9+()\-\s]{7,20}$/, {
      message: 'Enter a valid phone number.',
    });
    required(schemaPath.address, { message: 'Address is required.' });
  });

  protected onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Customer form submitted', this.customerModel());
  }
}
