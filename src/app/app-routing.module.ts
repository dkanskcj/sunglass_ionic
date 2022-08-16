import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then( m => m.LayoutPageModule)
  },
  {
    path: 'brand',
    loadChildren: () => import('./pages/brand/brand.module').then( m => m.BrandPageModule)
  },
  {
    path: 'items-register',
    loadChildren: () => import('./pages/items-register/items-register.module').then( m => m.ItemsRegisterPageModule)
  },
  {
    path: 'items-modify',
    loadChildren: () => import('./pages/items-modify/items-modify.module').then( m => m.ItemsModifyPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
