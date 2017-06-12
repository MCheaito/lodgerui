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
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './authentication/auth.guard';
import { HttpService} from  './_services/http.service';

import {State, intitialState} from "./_redux/state/main-state";
import { mainStoreReducer } from "./_redux/reducers/main-reducer";
import { BookEffects } from './_redux/effects/booking-effect';
import { BookingService } from './_services//booking.service';

import { DemoReduxComponent } from './demo-redux/demo-redux.component';

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
        DemoReduxComponent
            ],
    imports: [
        MaterialModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        StoreModule.provideStore({mainStoreReducer}),
        StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
     /**
     * @ngrx/router-store keeps router state up-to-date in the store and uses
     * the store as the single source of truth for the router's state.
     */
    RouterStoreModule.connectRouter(),
        /**
     * EffectsModule.run() sets up the effects class to be initialized
     * immediately when the application starts.
     *
     * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
     */
    EffectsModule.run(BookEffects),
       /**
     * `provideDB` sets up @ngrx/db with the provided schema and makes the Database
     * service available.
     */
    //DBModule.provideDB(schema),
        AppRoutingModule

    ],
    providers: [
        AuthGuard,
        BookingService,
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
