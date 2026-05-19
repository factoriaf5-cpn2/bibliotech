import { Component, computed, signal } from '@angular/core';
import { ICustomer } from '../../interfaces/customer.interface';
import { CustomerItem } from '../customer-item/customer-item';
import { IconButton } from '../../../shared/ui/icon-button/icon-button';
import { customers } from '../../../data/customer-data';

import { form, FormField } from '@angular/forms/signals';
@Component({
  selector: 'app-customer-list',
  imports: [CustomerItem, IconButton, FormField],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})

export class CustomerList {
  protected readonly customers = signal<ICustomer[]>(customers);

  protected readonly searchForm = form(signal<{ searchText: string }>(
    { searchText: '' }
  ))

  protected readonly filterCostumers = computed(() => {
    const textToSearch = this.searchForm.searchText().value().toLowerCase();
    return this.customers().filter(e =>
    (e.fullName.toLowerCase().includes(textToSearch) ||
      e.email.includes(textToSearch))
    )
  })
  protected handleDeletedUser(fullName: string) {
    this.customers.update(() =>
      this.customers().filter(e => !e.fullName.includes(fullName)));
  }

}
