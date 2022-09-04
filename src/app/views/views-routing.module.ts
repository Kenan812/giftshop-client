import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

let routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  //   canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuard],
  // },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    //canActivate: [AcessGuard],
    //canActivateChild: [AcessGuard],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
