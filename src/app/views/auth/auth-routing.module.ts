import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,

    children: [
      { path: '', redirectTo: 'sign_in', pathMatch: 'full' },
      {
        path: 'sign_in',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'sign_up',
        loadChildren: () =>
          import('./register/register.module').then((m) => m.RegisterModule),
      },
    //   {
    //     path: 'forgot-password',
    //     loadChildren: () =>
    //       import('./forgot-password/forgot-password.module').then(
    //         (m) => m.ForgotPasswordModule
    //       ),
    //   },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
