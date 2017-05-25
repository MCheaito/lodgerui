import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';


export const ROUTES: Routes = [
    { path: '', component: AppComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
