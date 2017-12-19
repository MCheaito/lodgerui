import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromTodos from './todos.reducer';

export interface ProductsState {
  todos: fromTodos.TodoState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  todos: fromTodos.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);