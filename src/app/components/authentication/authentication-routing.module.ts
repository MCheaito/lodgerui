import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { CommonModule } from '@angular/common';

import {AuthenticationComponent} from './authentication.component';

const authRoutes: Routes = [
  { path: 'login',  component: AuthenticationComponent },
  { path: 'logout', component: AuthenticationComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  exports:[
      RouterModule
  ],
  declarations: []
})
export class AuthenticationRoutingModule { }
