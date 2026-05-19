import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-tdf-form',
  imports: [FormsModule],
  templateUrl: './customer-tdf-form.html',
  styleUrl: './customer-tdf-form.css',
})
export class CustomerTdfForm {
  protected customer = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    loyalty: 'bronze',
    state: 'active',
    image: '',
  };

  protected loyaltyOptions = ['bronze', 'silver', 'gold', 'platinum', 'VIP'];
  protected stateOptions = ['active', 'inactive'];

  protected onSubmit(): void {
    console.log('Customer form submitted', this.customer);
  }
}
