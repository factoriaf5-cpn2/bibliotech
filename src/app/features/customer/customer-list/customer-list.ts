import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ICustomer } from '../../interfaces/customer.interface';
import { CustomerItem } from '../customer-item/customer-item';
import { IconButton } from '../../../shared/ui/icon-button/icon-button';
import { customers } from '../../../data/customer-data';

import { form, FormField } from '@angular/forms/signals';
import { CustomerService } from '../services/customer';
@Component({
  selector: 'app-customer-list',
  imports: [CustomerItem, IconButton, FormField, RouterLink],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})

export class CustomerList {
  private router = inject(Router);
  private customerService = inject(CustomerService);
  protected customers = computed(()=>[...this.customerService.customers()]);
  // protected readonly customers = signal<ICustomer[]>(customers);
  ngOnInit(){
    this.customerService.loadCustomers();
  }

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
  //   this.customers.update(() =>
  //     this.customers().filter(e => !e.fullName.includes(fullName)));
  }

  protected handleEditedUser(customerId:string){
    this.router.navigate(['/customers',customerId]); 
  }
}
