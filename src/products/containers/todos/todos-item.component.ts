import {
     Component, 
     Input, 
     Output,
     OnInit, 
     ChangeDetectionStrategy, 
     EventEmitter 
    } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

import * as fromStore from '../../store';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'todo-item',
  templateUrl: 'todos-item.component.html',
})
// <todo-form
// [todo]="todo$ | async"
// (selected)="onSelect($event)"
// (create)="onCreate($event)"
// (update)="onUpdate($event)"
// (remove)="onRemove($event)">
// </todo-form>

export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Input() mode: string;

  @Output() onChanged: EventEmitter<Todo> = new EventEmitter<Todo>();

  public isDone: boolean;
  public hasFocus:boolean;

  public isModeEdit:boolean;
  public isModeView:boolean;
  public isModeAdd:boolean;


  constructor(private fb :FormBuilder) {
  }
  ngOnInit() {

    this.isDone = ((this.todo)? this.todo.done:false);
    this.isModeEdit=false;
    this.isModeView=(this.mode == "VIEW");
    this.isModeAdd= (this.mode=="ADD")
  }

  mouseEnter(div: string) {
    this.hasFocus = true && ! this.isModeAdd;
  }

  mouseLeave(div: string) {
    this.hasFocus=false;
  }

  toggleModeEdit()
  {
    this.isModeEdit=! this.isModeEdit;
  }

  remove()
  {
    console.log('Remove');
  }

  onChecked(value) {

    this.isDone = value.target.checked;
    const done = this.isDone;

    this.onChanged.emit(
      {
        ...this.todo,
        done
      }
    );
  }

}