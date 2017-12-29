import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'todos',
  //styleUrls: ['products.component.scss'],
  template: `
  <div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="todolist not-done">
                <h1><i class="fa fa-tasks pull-left" aria-hidden="true"></i> List of Todos</h1>
                <hr>
                  <ul id="sortable" class="list-unstyled">
                    <li class="ui-state-default" *ngFor="let todo of (todos$ | async)">
                        <todo-item 
                          [todo]="todo"
                          (onChanged)="onItemChanged($event)"
                          [mode]="VIEW_MODE"
                          ></todo-item>
                    </li>
                    <li class="ui-state-default" >
                        <todo-item 
                          [todo]="todo"
                          (onChanged)="onItemChanged($event)"
                          [mode]="ADD_MODE"
                          ></todo-item>
                    </li>
                  </ul>
            </div>
        </div>
    </div>
  </div>  
  `,
  styles: [`body{
            background-color:#EEEEEE;
            }
            .todolist{
                background-color:#FFF;
                padding:20px 20px 10px 20px;
                margin-top:30px;
            }
            .todolist h1{
                margin:0;
                padding-bottom:20px;
                text-align:center;
            }
            .form-control{
                border-radius:0;
            }
            li.ui-state-default{
                background:#fff;
                border:none;
                border-bottom:1px solid #ddd;
            }

            li.ui-state-default:last-child{
                border-bottom:none;
            }

            .todo-footer{
                background-color:#F4FCE8;
                margin:0 -20px -10px -20px;
                padding: 10px 20px;
            }
            #done-items li{
                padding:10px 0;
                border-bottom:1px solid #ddd;
                text-decoration:line-through;
            }
            #done-items li:last-child{
                border-bottom:none;
            }
            #checkAll{
                margin-top:10px;
            }`]
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;
  private  readonly ADD_MODE:string  ='ADD';
  private  readonly VIEW_MODE:string  ='VIEW';

  constructor(private store: Store<fromStore.ProductsState>) { }

  ngOnInit() {
    this.todos$ = this.store.select(fromStore.getAllTodos);
    this.store.dispatch(new fromStore.LoadTodos());
  }

  onItemChanged(e:Todo)
  {
    console.log("dispatch event ",e)
    this.store.dispatch(new fromStore.UpdateTodo(e));
  }
}