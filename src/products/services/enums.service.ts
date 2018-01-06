import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/Of';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { KeyValue } from '../../app/dynamic-form/models/key-value.model';

import * as config from './config';


@Injectable()

export class EnumsService{
    constructor(private http :HttpClient){}

    loadEnums(name :string):Observable<KeyValue[]>
    {
        console.log("load enum", name);
        return this.http
            .get<KeyValue[]>(`${config.PATH_API}/${name}`)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }


}
