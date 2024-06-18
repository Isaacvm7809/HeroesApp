import { Routes } from '@angular/router';
import { NewPageComponent} from './heroes/pages/new-page/new-page.component';
import { LayoutPageComponent} from './heroes/pages/layout-page/layout-page.component';
import { SearchComponent } from './heroes/pages/search/search.component';
import { ListComponent } from './heroes/pages/list/list.component';
import { HeroPageComponent } from './heroes/pages/hero-page/hero-page.component';


export const routes: Routes = [
  { //localhost:4200/heroes
    path: 'heroes',component: LayoutPageComponent,
    children: [
      { path: 'new-hero',title: 'new-hero',component: NewPageComponent },
      { path: 'search',title: 'search',component: SearchComponent },
      { path: 'list',title: 'list',component: ListComponent },
      { path: 'edit/:id',title: 'edit',component: SearchComponent },
      { path: ':id',title: 'edit',component: HeroPageComponent },
      { path: '**', redirectTo: 'list' },
  ]},

  // {
 //   path:'auth',
  //   title:'auth',
  //   loadComponent: () => import('./auth/pages/layout-page/layout-page.component'),
  //     children: [
  //       {
  //         path: 'register',
  //         title: 'register',
  //         loadComponent:() => import('./auth/pages/register-page/register-page.component')
  //       },
  //       {
  //         path: 'login',
  //         title: 'login',
  //         loadComponent:() => import('./auth/pages/login-page/login-page.component')
  //       },
  //   ]},
  {
    path:'**',
    loadComponent: () => import('./shared/error404-page/error404-page.component'),
  },



];
