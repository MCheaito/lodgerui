import { HttpModule, Http , RequestOptions, XHRBackend } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import {NgRedux, NgReduxModule}   from 'ng2-redux';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './authentication/auth.guard';
import { HttpService} from  './_services/http.service';
import {IAppState, rootReducer,INITIAL_STATE} from './_store/store';
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
        AppRoutingModule,
        NgReduxModule
    ],
    providers: [
        AuthGuard,
        {
            provide: HttpService ,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions]
        }
    ],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(ngRedux:NgRedux<IAppState>)
    {
        ngRedux.configureStore(rootReducer,INITIAL_STATE);
    }
}
