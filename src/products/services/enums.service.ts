import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/Observable/Of";
import { catchError, map } from "rxjs/operators";
import "rxjs/add/observable/throw";
import { Enums } from "../../app/dynamic-form/models";

import * as config from "./config";

@Injectable()
export class EnumsService {
  constructor(private http: HttpClient) {}

  //    loadEnums(name :string):Observable<Enums[]>
  loadEnums(): Observable<Enums[]> {
    console.log("load enum", name);
    return this.http
      .get<Enums[]>(`${config.PATH_API}/enums`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
