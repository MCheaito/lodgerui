import { Injectable, Inject } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from '../../../app/store';
import * as todoActions from '../actions/todos.actions';
import * as fromServices from '../../services';


@Injectable()

export class TodosEffects {
    constructor(
      private actions$: Actions,
      private todoService: fromServices.TodosService
    ) {}

    @Effect()
    loadTodos$ = this.actions$.ofType(todoActions.LOAD_TODOS).pipe(
      switchMap(() => {
        return this.todoService
          .loadAllTodos()
          .pipe(
            map(res => new todoActions.LoadTodosSuccess(res)),
            catchError(error => of(new todoActions.LoadTodosFail(error)))
          );
      })
    );

    @Effect()
    updateTodo$ = this.actions$.ofType(todoActions.UPDATE_TODO).pipe(
      map((action: todoActions.UpdateTodo) => action.payload),
      switchMap(todo => {
        return this.todoService
          .updateTodo(todo)
          .pipe(
            map(pizza => new todoActions.UpdateTodoSuccess(todo)),
            catchError(error => of(new todoActions.UpdateTodoFail(error)))
          );
      })
    );


}