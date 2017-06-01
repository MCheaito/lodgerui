import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const ROUTES: Routes = [
    { path: 'login', component: AuthenticationComponent },
    { path: 'logout', component: AuthenticationComponent }, 
    { path: 'booking', loadChildren: './booking/booking.module#BookingModule'},
    { path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot( ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
   exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
