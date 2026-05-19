import { inject, Injectable, signal } from '@angular/core';
import { ICustomer } from '../../interfaces/customer.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private _customers = signal<ICustomer[]>([]);
  private http = inject(HttpClient);
  private url = 'http://localhost:3001/customers'

  


  get customers() {
    return this._customers.asReadonly();
  }

  loadCustomers() {
    this.http.get<ICustomer[]>(this.url).subscribe((customers) => {
      this._customers.set(customers);
    });
  }

  setNewCustomer(newCustomer: ICustomer) {
    // this._customers.update((current) => [...current, newCustomer]);
    this.http.post<ICustomer>(this.url, newCustomer).subscribe((customer) => 
          this._customers.update((current) => [...current, customer]))
      
  }

}
