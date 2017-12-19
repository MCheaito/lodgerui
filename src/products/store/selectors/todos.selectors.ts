import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromTodos from '../reducers/todos.reducer';

import {Todo} from '../../models/todo.model';


export const getTodoState = createSelector(
    fromFeature.getProductsState,
    (state: fromFeature.ProductsState) => state.todos
  );
  

export const getTodosEntities = createSelector(
    getTodoState, 
    fromTodos.getTodosEntities
)


export const getSelectedTodo = createSelector(
    getTodosEntities,
    fromRoot.getRouterState,
    (entities, router): Todo => {
      return router.state && entities[router.state.params.todoId];
    }
  );


  export const getAllTodos = createSelector(getTodosEntities, entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  });
  
  export const getTodosLoaded = createSelector(
    getTodoState,
    fromTodos.getTodosLoaded
  );
  export const getTodosLoading = createSelector(
    getTodoState,
    fromTodos.getTodosLoaded
  );