import * as fromTodos from '../actions/todos.actions'; 
import {Todo} from '../../models/todo.model';

//State
export interface TodoState {
    entities: { [id: number]: Todo };
    loaded: boolean;
    loading: boolean;
  }


  export const initialState: TodoState ={
      entities:{}, 
      loaded:false,
      loading:false
  }

//Reducers function
export function reducer(
    state = initialState,
    action: fromTodos.TodosAction
  ): TodoState {
    switch (action.type) {
      case fromTodos.LOAD_TODOS: {
        return {
          ...state,
          loading: true,
        };
      }
  
      case fromTodos.LOAD_TODOS_SUCCESS: {
        const todos = action.payload;
  
        const entities = todos.reduce(
          (entities: { [id: number]: Todo }, todo: Todo) => {
            return {
              ...entities,
              [todo.id]: todo,
            };
          },
          {
            ...state.entities,
          }
        );
  
        return {
          ...state,
          loading: false,
          loaded: true,
          entities,
        };
      }
  
      case fromTodos.CREATE_TODO_FAIL: {
        return {
          ...state,
          loading: false,
          loaded: false,
        };
      }
  
      case fromTodos.UPDATE_TODO_SUCCESS:
      case fromTodos.CREATE_TODO_SUCCESS: {
        const todo = action.payload;
        const entities = {
          ...state.entities,
          [todo.id]: todo,
        };
  
        return {
          ...state,
          entities,
        };
      }
  
      case fromTodos .REMOVE_TODO_SUCCESS: {
        const todo = action.payload;
        const { [todo.id]: removed, ...entities } = state.entities;
  
        return {
          ...state,
          entities,
        };
      }
    }
  
    return state;
  }

  export const getTodosEntities = (state: TodoState) => state.entities;
  export const getTodosLoading = (state: TodoState) => state.loading;
  export const getTodosLoaded = (state: TodoState) => state.loaded;