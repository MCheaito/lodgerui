import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromTodos from './todos.reducer';
import * as fromEnums from './enum.reducer';

export interface ProductsState {
  todos: fromTodos.TodoState;
  enums: fromEnums.EnumState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  todos: fromTodos.reducer, 
  enums: fromEnums.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);