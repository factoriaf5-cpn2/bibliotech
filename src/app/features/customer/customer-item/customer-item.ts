import { Component, input, output } from '@angular/core';
import { ICustomer } from '../../interfaces/customer.interface';


@Component({
  selector: '[app-customer-item]',
  imports: [],
  templateUrl: './customer-item.html',
  styleUrl: './customer-item.css',
})
export class CustomerItem {

  readonly customer = input.required<ICustomer>();

  getLoyaltyClasses(loyalty: string): string {
    const loyaltyColorMap = {
      'Bronze': 'text-tertiary bg-tertiary-fixed',
      'Silver': 'text-secondary bg-secondary-fixed',
      'Gold': 'bg-yellow-300 text-yellow-900',
      'Platinum': 'bg-gray-400 text-gray-900',
      'VIP': 'bg-purple-500 text-white'
    };
    return loyaltyColorMap[loyalty as keyof typeof loyaltyColorMap] || '';
  }

}
