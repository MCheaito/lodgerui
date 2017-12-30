import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/Of';

import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Todo } from '../models/todo.model';

const PATH_API: string = "http://localhost:3004/todos";

@Injectable()

export class TodosService{
    constructor(private http :HttpClient){}

    loadAllTodos():Observable<Todo[]>
    {
        return this.http
            .get<Todo[]>(PATH_API)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    updateTodo(payload: Todo): Observable<Todo> {
        return this.http
          .put<Todo>(`${PATH_API}/${payload.id}`, payload)
          .pipe(catchError((error: any) => Observable.throw(error.json())));
      }

      
    CreateTodo(payload: Todo): Observable<Todo> {
    
        return this.http
          .post<Todo>(`${PATH_API}`, payload)
          .pipe(catchError((error: any) => Observable.throw(error.json())));
      }
}
