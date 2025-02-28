import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  { path: '', component: HomeComponent, },

  {
    path: 'form',
    loadComponent: () => import('./components/search/search.component')
      .then(mod => mod.SearchComponent)
  },
//   {
//     path: 'continents',
//     loadComponent: () => import('./features/general/continent/item.component')
//       .then(mod => mod.ItemComponent)
//   },
//   {
//     path: 'continents/:id',
//     loadComponent: () => import('./features/general/continent-form/item.component')
//       .then(mod => mod.ItemComponent)
//   },

//   { path: '**', component: NotFoundComponent }
];