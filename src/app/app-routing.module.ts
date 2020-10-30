import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./users/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cardapio',
    children: [
      {
        path: '',
        loadChildren: () => import('./cardapio/cardapio-list/cardapio-list.module').then(m => m.CardapioListPageModule)
      },
      {
        path: 'new',
        loadChildren: () => import('./cardapio/cardapio-edit/cardapio-edit.module').then(m => m.CardapioEditPageModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./cardapio/cardapio-edit/cardapio-edit.module').then(m => m.CardapioEditPageModule)
      }
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: '',
        loadChildren: () => import('./categories/category-list/category-list.module').then(m => m.CategoryListPageModule)
      },
      {
        path: 'new',
        loadChildren: () => import('./categories/category-edit/category-edit.module').then(m => m.CategoryEditPageModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./categories/category-edit/category-edit.module').then(m => m.CategoryEditPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
