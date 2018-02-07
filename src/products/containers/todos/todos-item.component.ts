import {
  Component,
  Input,
  Output,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  OnChanges,
  ViewChild,
  SimpleChanges,
  AfterViewInit
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
import 'rxjs/add/observable/of';
import { KeyValue } from '../../../app/dynamic-form/models/key-value.model';
import { FieldConfig } from '../../../app/dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from '../../../app/dynamic-form/containers/dynamic-form/dynamic-form.component';

@Component({
  selector: 'todo-item',
  templateUrl: 'todos-item.component.html',
  styleUrls: ['todos-item.component.scss']
})
// <todo-form
// [todo]="todo$ | async"
// (selected)="onSelect($event)"
// (create)="onCreate($event)"
// (update)="onUpdate($event)"
// (remove)="onRemove($event)">
// </todo-form>

export class TodoItemComponent implements AfterViewInit, OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  private config: FieldConfig[];
  private exists = false;

  @Input() todo: Todo;
  @Input() mode: string;

  @Output() onChanged: EventEmitter<Todo> = new EventEmitter<Todo>();

  public isDone: boolean;
  public hasFocus: boolean;

  public isModeEdit: boolean;
  public isModeView: boolean;
  public isModeAdd: boolean;

  private listOfCategories$: Observable<KeyValue[]>;
  public listOfYN$: Observable<KeyValue[]>;
  public listOfSeverity$: Observable<KeyValue[]>;
  public listOfPriorty$: Observable<KeyValue[]>;
  public displayedDataList$: Observable<KeyValue[]>;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromStore.ProductsState>
  ) { }

  ngOnInit() {

    this.isDone = ((this.todo) ? this.todo.done : false);
    this.isModeEdit = false;
    this.isModeView = (this.mode === 'VIEW');
    this.isModeAdd = (this.mode === 'ADD')

    this.listOfCategories$ = this.store.select(fromStore.getCategoriesEnums);
    this.listOfSeverity$ = this.store.select(fromStore.getSeverityEnums);
    this.listOfPriorty$ = this.store.select(fromStore.getPriorityEnums);
    this.listOfYN$ =
      Observable.of(
        [
          { key: 'Y', value: 'yes' },
          { key: 'N', value: 'No' }
        ]);

    this.config = [
      {
        type: 'input',
        label: 'Description',
        name: 'description',
        placeholder: 'Enter your TODO description',
        cols:2,
        validation: [Validators.required, Validators.minLength(4)]
      }
      ,
      {
        type: 'select',
        label: 'Category',
        name: 'category',
        options$: this.listOfCategories$,
        placeholder: 'Select an option',
        validation: [Validators.required]
      },
      {
        type: 'input',
        label: 'Sub Category',
        name: 'subCategory',
        placeholder: 'Select an option',
        validation: [Validators.required]
      },
      {
        type: 'input',
        label: 'Created by',
        name: 'createdBy',
        placeholder: 'Enter creator name',
        validation: [Validators.required]
      },
      {
        type: 'date',
        label: 'Created on',
        name: 'createdOn',
        placeholder: 'yyyy-mm-dd',
        validation: [Validators.required]
      },
      {
        type: 'date',
        label: 'Due by',
        name: 'dueBy',
        placeholder: 'yyyy-mm-dd',
        validation: [Validators.required]
      },
      {
        type: 'select',
        label: 'Severity',
        name: 'severity',
        options$: this.listOfSeverity$,
        placeholder: 'Select severity',
        validation: [Validators.required]
      },
      {
        type: 'select',
        label: 'Priorty',
        name: 'prior',
        options$: this.listOfPriorty$,
        placeholder: 'Select an option',
        validation: [Validators.required]
      },
      {
        type: 'checkbox',
        label: 'Closed',
        name: 'done',
        placeholder: '',
        validation: [Validators.required]
      },
      {
        type: 'textArea',
        label: 'Remarks',
        name: 'remarks',
        cols:2,
        placeholder: 'Enter the remarks',
        validation: []
      },
      {
        label: 'Submit',
        name: 'submit',
        type: 'button',
        cols:2
      }
    ];
  }

  ngAfterViewInit() {
    let previousValid = this.form.valid;

    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.listOfCategories$.subscribe(e => {
      console.log('this.listOfCategories$.subscribe', e);
    }
    );

    // this.form.setDisabled('submit', true);
    // this.form.controls.forEach(cfg => {
    //   this.form.setValue(cfg.name, this.todo[cfg.name] );
    // }
    // )
    //setValue('description', eval('this.todo.description'));


  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }

  mouseEnter(div: string) {
    this.hasFocus = true && !this.isModeAdd;
  }

  mouseLeave(div: string) {
    this.hasFocus = false;
  }

  toggleModeEdit() {
    this.isModeEdit = !this.isModeEdit;
  }

  onCreate(event: Todo) {
    this.store.dispatch(new fromStore.CreateTodo(event));
  }

  onUpdate(event: Todo) {
    this.store.dispatch(new fromStore.UpdateTodo(event));
  }

  remove() {
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