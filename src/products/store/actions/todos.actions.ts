import { Action } from '@ngrx/store';

import { Todo } from '../../models/todo.model';

// load TODOS
export const LOAD_TODOS = '[Products] Load TODOS';
export const LOAD_TODOS_FAIL = '[Products] Load TODOS Fail';
export const LOAD_TODOS_SUCCESS = '[Products] Load TODOS Success';

export class LoadTodos implements Action {
    readonly type = LOAD_TODOS;
}
export class LoadTodosSuccess implements Action {
    readonly type = LOAD_TODOS_SUCCESS;
    constructor(public payload: Todo[]) {}
}
export class LoadTodosFail implements Action {
    readonly type = LOAD_TODOS_FAIL;
    constructor(public payload: any) {}
}


// create TODOS
export const CREATE_TODO = '[Products] Create Todo';
export const CREATE_TODO_FAIL = '[Products] Create Todo Fail';
export const CREATE_TODO_SUCCESS = '[Products] Create Todo Success';

export class CreateTodo implements Action {
  readonly type = CREATE_TODO;
  constructor(public payload: Todo) {
  }
}

export class CreateTodoFail implements Action {
  readonly type = CREATE_TODO_FAIL;
  constructor(public payload: any) {}
}

export class CreateTodoSuccess implements Action {
  readonly type = CREATE_TODO_SUCCESS;
  constructor(public payload: Todo) {}
}


// update todo
export const UPDATE_TODO = '[Products] Update Todo';
export const UPDATE_TODO_FAIL = '[Products] Update todo Fail';
export const UPDATE_TODO_SUCCESS = '[Products] Update todo Success';

export class UpdateTodo implements Action {
  readonly type = UPDATE_TODO;
  constructor(public payload: Todo) {}
}

export class UpdateTodoFail implements Action {
  readonly type = UPDATE_TODO_FAIL;
  constructor(public payload: any) {}
}

export class UpdateTodoSuccess implements Action {
  readonly type = UPDATE_TODO_SUCCESS;
  constructor(public payload: Todo) {}
}


// remove ¸todo
export const REMOVE_TODO = '[Products] Remove Todo';
export const REMOVE_TODO_FAIL = '[Products] Remove Todo Fail';
export const REMOVE_TODO_SUCCESS = '[Products] Remove Todo Success';

export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;
  constructor(public payload: Todo) {}
}

export class RemoveTodoFail implements Action {
  readonly type = REMOVE_TODO_FAIL;
  constructor(public payload: any) {}
}

export class RemoveTodoSuccess implements Action {
  readonly type = REMOVE_TODO_SUCCESS;
  constructor(public payload: Todo) {}
}

// action types
export type TodosAction =
| LoadTodos
| LoadTodosFail
| LoadTodosSuccess
| CreateTodo
| CreateTodoFail
| CreateTodoSuccess
| UpdateTodo
| UpdateTodoFail
| UpdateTodoSuccess
| RemoveTodo
| RemoveTodoFail
| RemoveTodoSuccess;