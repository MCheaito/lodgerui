import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, Http , RequestOptions, XHRBackend } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStoreModule } from "@ngrx/router-store";
import { DBModule } from '@ngrx/db';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './components/authentication/auth.guard';
import { HttpService, BookingService,ShowMessageService} from  './_services';
import {BookingModule} from  './components/booking/booking.module';
import { BookingActions } from './_redux/actions/booking-action';
import { BookingEffects } from './_redux/effects/booking-effect';
import reducer from './_redux/reducers';
import { ShowMessageComponent } from './components/show-message/show-message.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
/*
export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
  return  new HttpService(backend, defaultOptions);
}*/


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent,
        ContactComponent,
        AuthenticationComponent,
        PageNotFoundComponent,
        HomeComponent, ShowMessageComponent, DashboardComponent, SidebarComponent
            ],
    imports: [
        BrowserModule,
        FormsModule,
        ChartsModule,
        HttpModule,
        BookingModule,
        BrowserAnimationsModule,
        EffectsModule.run(BookingEffects),
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    AppRoutingModule
    ],
    providers: [
        AuthGuard,
        BookingService,
        BookingActions,
        ShowMessageService,
        { provide: Http, useClass: HttpService }
        
        /*{
            provide: HttpService ,
            useFactory: (backend: XHRBackend, options: RequestOptions) => {
        return new HttpService(backend, options);
             },
            deps: [XHRBackend, RequestOptions]
        }*/
    ],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
