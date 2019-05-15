import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnicornsComponent} from './unicorns/unicorns.component';

const routes: Routes = [{
  path: '',
  component: UnicornsComponent
}, {
  path: 'admin',
  loadChildren: './admin/admin.module#AdminModule'
},
  {
    path: '**',
    redirectTo: ''
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
