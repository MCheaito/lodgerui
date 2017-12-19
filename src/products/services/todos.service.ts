import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Todo } from '../models/todo.model';


@Injectable()

export class TodosService{
    constructor(private http :HttpClient){}

    loadAllTodos():Observable<Todo[]>
    {
        return this.http
                    .get<Todo[]>('../../assets/data/todos.json')
                    .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
}
