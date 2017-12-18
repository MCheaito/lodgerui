# LodgerUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Vs Studio Code : Shift-Ctl-P > Palette de commandes
## ASP.net helpers
## Angular v4 typescript snippet
## Auto import 
## beautify 
## install NrGx  : npm install @ngrx/core @ngrx/store --save
##                 npm install @ngrx/store-devtools --save
## https://medium.com/@flashMasterJim/the-basics-of-ngrx-effects-effect-and-async-middleware-for-ngrx-store-in-angular-2-f25587493329
## on peut utiliser le BD firebase de google
## npm install angularfire2 --save
## info about redux  Rxjs : http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html


############ 
Underscore is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects. It’s the answer to the question: “If I sit down in front of a blank HTML page, and want to start being productive immediately, what do I need?” … and the tie to go along with jQuery's tux and Backbone's suspenders.


## Open browser with npm 
This can be achieved by including a couple of additional packages in your project.

Additional packages

Install http-server:

$ npm install http-server --save-dev

and concurrently:

$ npm install concurrently --save-dev

npm scripts

Add the following open script to package.json:

"scripts": {
    "start": "npm run open",
    "open": "concurrently \"http-server -a localhost -p 1234\" \"open http://localhost:1234/build\""
 }


## http://jasonwatmore.com/post/2017/01/24/angular-2-custom-modal-window-dialog-box


## theme : https://wdtz.org/bootswatch-theme-selector.html

## 2017-06-17
npm install ng2-charts --save

## https://www.strapui.com/themes/ani-angular-4-bootstrap-4-theme/
## c3.js charting library  : http://c3js.org/
## https://fullcalendar.io/   et https://github.com/fullcalendar/fullcalendar 
## https://github.com/jkuri/ng2-datepicker
## https://github.com/akveo/ng2-smart-table
## https://github.com/MurhafSousli/ngx-progressbar
## https://github.com/ngx-translate/core
## https://github.com/ngx-translate/http-loader
## installer composer & installer firebase/php_jwt

### Visual studio short cut
-- Formatting  : On Windows Shift + Alt + F

NGRX/ROUTERS
------------
0. installer @ngrx 4 et plus
1. Créer les repertoires  "store"  dans src\app
2. Créer store\reducers
3. Créer index.ts dans store\reducers 
4. Créer index.ts dans store
5. Ajouter le code suivant dans app.module.ts
    import { StoreModule, ActionReducer } from '@ngrx/store';  // ActionReducer  pour avoir acces sur StoreModule.forRoot
    @NgModule({ ... 
    storeModule.forRoot({},{metaReducers}),
    ... })
6. Dans Reducers/index.ts : 
    - exporter les stat 
    - exporter reducers
7. dans app.Module.ts
    . importe {reducers} from './store'
    . storeModule.forRoot({reducers}) 





