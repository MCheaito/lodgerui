import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './authentication/auth.guard';
import { HomeComponent} from './home/home.component';



export const ROUTES: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule'},
//    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
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
