import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';
import { Todo } from '../../models/todo.model';


@Component({
  selector: 'todos',
//   styleUrls: ['todos.component.scss'],
templateUrl: 'todos.component.html',

//       <mat-accordion>
//       <mat-expansion-panel *ngFor="let todo of (todos$ | async)">
//           <mat-expansion-panel-header>
//               <mat-panel-title>
//                   <span class="badge"> {{todo?.id}}</span>
//               </mat-panel-title>
//               <mat-panel-description>
//                   {{todo?.description}}
//               </mat-panel-description>
//           </mat-expansion-panel-header>
//       </mat-expansion-panel>
//   </mat-accordion>

})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;
  private readonly ADD_MODE: string = 'ADD';
  private readonly VIEW_MODE: string = 'VIEW';

  constructor(private store: Store<fromStore.ProductsState>) { }

  ngOnInit() {
    this.todos$ = this.store.select(fromStore.getAllTodos);
    this.store.dispatch(new fromStore.LoadTodos());
  }

  onItemChanged(e: Todo) {
    console.log('dispatch event ', e)
    this.store.dispatch(new fromStore.UpdateTodo(e));
  }
}