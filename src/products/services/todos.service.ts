import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/Of';

import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Todo } from '../models/todo.model';

import * as config from './config';


@Injectable()

export class TodosService{
    constructor(private http :HttpClient){}

    loadAllTodos():Observable<Todo[]>
    {
        return this.http
            .get<Todo[]>(`${config.PATH_API}/todos`)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    updateTodo(payload: Todo): Observable<Todo> {
        return this.http
          .put<Todo>(`${config.PATH_API}/todos/${payload.id}`, payload)
          .pipe(catchError((error: any) => Observable.throw(error.json())));
      }

      
    CreateTodo(payload: Todo): Observable<Todo> {
    
        return this.http
          .post<Todo>(`${config.PATH_API}/todos`, payload)
          .pipe(catchError((error: any) => Observable.throw(error.json())));
      }
}
