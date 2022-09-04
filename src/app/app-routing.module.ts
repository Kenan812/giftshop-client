import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { defaultRoutePrefix } from './core/constants/config';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/views.module').then((m) => m.ViewsModule),
  },
  { path: '**', redirectTo: `${defaultRoutePrefix}` },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

