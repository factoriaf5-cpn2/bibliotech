import { Routes } from '@angular/router';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './features/dashboard/dashboard';
import { CustomerList } from './features/customer/customer-list/customer-list';
import { CustomerSForm } from './features/customer/customer-forms/customer-s-form/customer-s-form';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Dashboard
      },

      {
        path: 'dashboard',
        redirectTo: '/'
      },
      {
        path: 'customers',
        component: CustomerList,
      },
            {
        path: 'customers/:customerId',
        component: CustomerSForm,
      },
      {
        path:'**',
        component: Dashboard
      }

    ]
  },

];
