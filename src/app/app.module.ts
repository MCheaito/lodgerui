import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { GridModule } from './grid/grid.module'
import { ChartsModule } from 'ng2-charts';
// import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, Http, RequestOptions, XHRBackend } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { RouterStoreModule } from "@ngrx/router-store";
// import { DBModule } from '@ngrx/db';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
// import { AppRoutingModule } from './app-routing.module';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './components/authentication/auth.guard';
import { /*HttpService,*/ BookingService, ShowMessageService } from './_services';
import { BookingModule } from './components/booking/booking.module';
import { BookingActions } from './_redux/actions/booking-action';
import { BookingEffects } from './_redux/effects/booking-effect';
import reducer from './_redux/reducers';
import { ShowMessageComponent } from './components/show-message/show-message.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { reducers, CustomSerializer } from './store';  // Pour importer le Custom Router Serializer  (importer  customSerializer)
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store'; // Pour importer le Custom Router Serializer

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { GridRowComponent } from './grid/grid-row/grid-row.component';
import { GridItemComponent } from './grid/grid-item/grid-item.component';
// import { GridComponent } from './grid/grid/grid.component';

// this would be done dynamically with webpack for builds
const environment = {
    development: true,
    production: false,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
    ? [storeFreeze]
    : [];

/*
export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
  return  new HttpService(backend, defaultOptions);
}*/

// routes
export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'products' },
    { path: 'products',        loadChildren: '../products/products.module#ProductsModule'},
    // { path: 'home', component: HomeComponent },
    { path: 'login', component: AuthenticationComponent },
    { path: 'logout', component: AuthenticationComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'booking', loadChildren: './components/booking/booking.module#BookingModule' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent,
        ContactComponent,
        AuthenticationComponent,
        PageNotFoundComponent,
        ShowMessageComponent, DashboardComponent, SidebarComponent
    ],
    imports: [
        DynamicFormModule,
        BrowserModule,
        FormsModule,
        ChartsModule,
        HttpModule,
        BookingModule,
        ReactiveFormsModule ,
        BrowserAnimationsModule,
        //        EffectsModule.run(BookingEffects),
        //        StoreModule.provideStore(reducer),
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule, // Pour importer le Custom Router Serializer
        environment.development ? StoreDevtoolsModule.instrument() : [],
        RouterModule.forRoot(ROUTES),

    ],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomSerializer },
        AuthGuard,
        BookingService,
        BookingActions,
        ShowMessageService
        // ,        { provide: Http, useClass: HttpService }

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
