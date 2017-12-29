import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'todos',
  //styleUrls: ['products.component.scss'],
  template: `
    <div class="todos">
      <div class="todos__new">
        <a
          class="btn btn-primary" 
          routerLink="./new">
          New Todo
        </a>
      </div>
      <div class="container">
        <div *ngIf="!((todos$ | async)?.length)">
          No todos, add one to get started.
        </div>
        <div *ngFor="let todo of (todos$ | async)">
            <div class="form-group"><label>{{todo.id}}</label> <label>{{todo.description}}</label></div>
        </div>
      </div>
    </div>
  `,
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.todos$ = this.store.select(fromStore.getAllTodos);
    this.store.dispatch(new fromStore.LoadTodos());
  }
}