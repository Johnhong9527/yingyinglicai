import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./module/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./module/user/user.module').then(mod => mod.UserModule)
  },
  {
    path: 'else',
    loadChildren: () =>
      import('./module/else/else.module').then(mod => mod.ElseModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
