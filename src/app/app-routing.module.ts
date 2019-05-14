import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnicornsComponent } from './unicorns/unicorns.component';

const appRoutes: Routes = [
  { path: 'unicorns', component: UnicornsComponent },
  {
    path: '',
    redirectTo: '/unicorns',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: '**',
    redirectTo: '/unicorns'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
