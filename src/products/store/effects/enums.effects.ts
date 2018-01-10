import { Injectable, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as fromRoot from '../../../app/store';
import * as enumActions from '../actions/enum.actions';
import * as fromServices from '../../services';
import { EnumsAction } from 'products/store';


@Injectable()

export class EnumsEffects {
    constructor(
      private actions$: Actions,
      private enumService: fromServices.EnumsService
    ) {}

    // @Effect()
    // loadEnums$ = this.actions$.ofType(enumActions.LOAD_ENUM).pipe(
    //   map((action: enumActions.LoadEnums) => action.payload),
    //   switchMap((name) => {
    //     return this.enumService
    //       .loadEnums(name)
    //       .pipe(
    //         map(res => new enumActions.LoadEnumsSuccess(res)),
    //         catchError(error => of(new enumActions.LoadEnumsFail(error)))
    //       );
    //   })
    // );

    @Effect()
    loadTodos$ = this.actions$.ofType(enumActions.LOAD_ENUM).pipe(
      switchMap(() => {
        return this.enumService
          .loadEnums()
          .pipe(
            map(res => new enumActions.LoadEnumsSuccess(res)),
            catchError(error => of(new enumActions.LoadEnumsFail(error)))
          );
      })
    );
}