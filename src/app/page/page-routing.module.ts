import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';

const routes: Routes = [
  {
    path: '', component: PageComponent, children: [
      { path: '', loadComponent: () => import('./layout/layout.component').then((m) => m.LayoutComponent) },
      { path: 'products', loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
