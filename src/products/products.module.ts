import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';
import { DynamicFormModule } from '../app/dynamic-form/dynamic-form.module';
import {FlexLayoutModule} from '@angular/flex-layout';

// // components
// import * as fromComponents from './components';

// // containers
 import * as fromContainers from './containers';

// services
import * as fromServices from './services';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.TodosComponent,
  },
  {
    path: ':todoId',
    component: fromContainers.TodoItemComponent,
  },
  {
    path: 'new',
    component: fromContainers.TodoItemComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects),
    DynamicFormModule,
    FlexLayoutModule
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers],
  // declarations: [...fromContainers.containers, ...fromComponents.components],
  // exports: [...fromContainers.containers, ...fromComponents.components]
})
export class ProductsModule { }
