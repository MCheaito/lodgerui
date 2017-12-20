import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { tap } from 'rxjs/operators';
import * as fromStore from '../../store';

import { Todo } from '../../models/todo.model';

@Component({
  selector: 'todo-item',
  //styleUrls: ['todo-item.component.scss'],
  template: `
        <div>this is the selected todo</div>
        <div class="container">{{current}}</div>

  `,
})
// <todo-form
// [todo]="todo$ | async"
// (selected)="onSelect($event)"
// (create)="onCreate($event)"
// (update)="onUpdate($event)"
// (remove)="onRemove($event)">
// </todo-form>

export class TodoItemComponent implements OnInit {
  todo$: Observable<Todo>;
  current:Todo;

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.todo$ = this.store.select(fromStore.getSelectedTodo);
    
    let subscription = this.todo$.subscribe(
        value => 
        {
            console.log("selected todo",value);
            this.current=value;}
    );

  }

  onSelect(event: number[]) {
    console.log("on select " + event);
  }

  onCreate(event: Todo) {
    this.store.dispatch(new fromStore.CreateTodo(event));
  }

  onUpdate(event: Todo) {
    this.store.dispatch(new fromStore.UpdateTodo(event));
  }

  onRemove(event: Todo) {
    const remove = window.confirm('Are you sure?');
    if (remove) {
      this.store.dispatch(new fromStore.RemoveTodo(event));
    }
  }
}