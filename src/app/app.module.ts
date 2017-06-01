import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent,
        ContactComponent,
        HomeComponent,
        AuthenticationComponent,
        PageNotFoundComponent
            ],
    imports: [
        MaterialModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
      entryComponents: [
    AppComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
