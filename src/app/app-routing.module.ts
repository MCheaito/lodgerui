import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './components/authentication/auth.guard';
import { HomeComponent} from './components/home/home.component';

export const ROUTES: Routes = [
   // { path: 'home', loadChildren:'./components/home/home.module#HomeModule'},
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent },
 
    { path: 'login', component: AuthenticationComponent },
    { path: 'logout', component: AuthenticationComponent }, 
    { path: 'booking', loadChildren:'./components/booking/booking.module#BookingModule'},
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
