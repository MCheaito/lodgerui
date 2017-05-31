import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MaterialModule } from '@angular/material';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'booking/new', component: BookingComponent },
    { path: 'login', component: AuthenticationComponent },
    { path: 'logout', component: AuthenticationComponent }

];

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent,
        ContactComponent,
        BookingComponent,
        HomeComponent,
        AuthenticationComponent
    ],
    imports: [
         MaterialModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
