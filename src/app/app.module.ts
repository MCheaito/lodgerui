
import { HttpModule, Http , RequestOptions, XHRBackend } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
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
import { HttpService} from  './_services/http.service';
import { BookingService } from './_services/booking.service';
import {BookingModule} from  './components/booking/booking.module';
import { BookingActions } from './_redux/actions/booking-action';
import { BookingEffects } from './_redux/effects/booking-effect';
import reducer from './_redux/reducers';
import { ModalComponent } from './components/modal/modal.component';

export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
  return  new HttpService(backend, defaultOptions);
}


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent,
        ContactComponent,
        AuthenticationComponent,
        PageNotFoundComponent,
        ModalComponent
            ],
    imports: [
        MaterialModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        BookingModule,
        EffectsModule.run(BookingEffects),
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    AppRoutingModule
    ],
    providers: [
        AuthGuard,
        BookingService,BookingActions,
        {
            provide: HttpService ,
            useFactory: httpFactory,

            deps: [XHRBackend, RequestOptions]
        }
    ],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
