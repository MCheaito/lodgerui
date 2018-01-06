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

import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';
import { KeyValue } from '../../../app/dynamic-form/models/key-value.model';
import { FieldConfig } from '../../../app/dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from '../../../app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { Todo } from '../../models/todo.model';

@Component({
    selector: 'todo-form',

    template: `
    <div class="form-group">
      <dynamic-form
        [config]="config"
        #form="dynamicForm"
        (submit)="submit($event)">
      </dynamic-form>
      {{ form.valid }}
      {{ form.value | json }}
    </div>
  `
})


export class TodoFormComponent implements AfterViewInit {
  
    @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
    private listOfCategories : KeyValue[]= [
      {
        key:'1',
        value:'Administration'
      },
      {
        key:'2',
        value:'Employees'
      },
      {
        key:'3',
        value:'Planning'
      }
      
      
    ];
    private config: FieldConfig[];
    
    // = [
    //     {
    //       type: 'input',
    //       label: 'Description',
    //       name: 'description',
    //       placeholder: 'Enter your TODO description',
    //       validation: [Validators.required, Validators.minLength(4)]
    //     },
    //     {
    //       type: 'select',
    //       label: 'Category',
    //       name: 'category',
    //       options: this.store.select(fromStore.getAllEnums),
    //       placeholder: 'Select an option',
    //       validation: [Validators.required]
    //     },
    //     {
    //       type: 'input',
    //       label: 'Sub Category',
    //       name: 'subCategory',
    //       placeholder: 'Select an option',
    //       validation: [Validators.required]
    //     },    
    //     {
    //       type: 'input',
    //       label: 'Created by',
    //       name: 'createdBy',
    //       placeholder: 'Enter creator name',
    //       validation: [Validators.required]
    //     },
    //     {
    //       type: 'date',
    //       label: 'Created on',
    //       name: 'createdOn',
    //       placeholder: 'yyyy-mm-dd',
    //       validation: [Validators.required]
    //     },
    //     {
    //       type: 'date',
    //       label: 'Due by',
    //       name: 'dueBy',
    //       placeholder: 'yyyy-mm-dd',
    //       validation: [Validators.required]
    //     }, 
    //     // {
    //     //   type: 'select',
    //     //   label: 'Priorty',
    //     //   name: 'prior',
    //     //   options: ['1', '2', '3', '4'],
    //     //   placeholder: 'Select an option',
    //     //   validation: [Validators.required]
    //     // },
    //     {
    //       type: 'input',
    //       label: 'checked',
    //       name: 'done',
    //       //options: ['Yes', 'No'],
    //       placeholder: '',
    //       validation: [Validators.required]
    //     }, 
    //     {
    //       type: 'textArea',
    //       label: 'Remarks',
    //       name: 'remarks',
    //       placeholder: 'Enter the remarks',
    //       validation: []
    //     }, 
    //     {
    //       label: 'Submit',
    //       name: 'submit',
    //       type: 'button'
    //     }
    //   ];



    private exists = false;

    @Input() todo: Todo;

    @Output() create: EventEmitter<Todo> = new EventEmitter<Todo>();
    @Output() update: EventEmitter<Todo> = new EventEmitter<Todo>();

    constructor(private store: Store<fromStore.ProductsState>) {

      this.config  = [
        {
          type: 'input',
          label: 'Description',
          name: 'description',
          placeholder: 'Enter your TODO description',
          validation: [Validators.required, Validators.minLength(4)]
        },
        {
          type: 'select',
          label: 'Category',
          name: 'category',
          options: this.store.select(fromStore.getAllEnums),
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
        // {
        //   type: 'select',
        //   label: 'Priorty',
        //   name: 'prior',
        //   options: ['1', '2', '3', '4'],
        //   placeholder: 'Select an option',
        //   validation: [Validators.required]
        // },
        {
          type: 'input',
          label: 'checked',
          name: 'done',
          //options: ['Yes', 'No'],
          placeholder: '',
          validation: [Validators.required]
        }, 
        {
          type: 'textArea',
          label: 'Remarks',
          name: 'remarks',
          placeholder: 'Enter the remarks',
          validation: []
        }, 
        {
          label: 'Submit',
          name: 'submit',
          type: 'button'
        }
      ];



//      this.listOfCategories$ = this.store.select(fromStore.getAllEnums);
      this.store.dispatch(new fromStore.LoadEnums("categories"));
     }

    ngAfterViewInit() {
        let previousValid = this.form.valid;

        this.form.changes.subscribe(() => {
          if (this.form.valid !== previousValid) {
            previousValid = this.form.valid;
            this.form.setDisabled('submit', !previousValid);
          }
        });
    
       // this.form.setDisabled('submit', true);
      //  this.form.setValue('name', 'Todd Motto');
      }
      
      submit(value: {[name: string]: any}) {
        console.log(value);
      }
    // form = this.fb.group({
    //     //        description: ['', [Validators.required, Validators.minLength(2)]],
    //     description: ['', Validators.required],
    //     category: ['', Validators.required],
    //     subCategory: ['', Validators.required]
    //     // assignedTo:['', Validators.required],
    //     // createdBy:['', Validators.required],
    //     // createdOn:['', Validators.required],
    //     // dueBy:['', Validators.required],
    //     // prior:['', Validators.required],
    //     // done:['', Validators.required],
    //     //remarks:['sss', Validators.nullValidator]   

    // });

    // //Description
    // get descriptionControl() {
    //     return this.form.get('description') as FormControl;
    // }
    // get descriptionControlInvalid() {
    //     return this.descriptionControl.hasError('required') && this.descriptionControl.touched;
    // }
    // //Category
    // get categoryControl() {
    //     return this.form.get('category') as FormControl;
    // }
    // get categoryControlInvalid() {
    //     return this.categoryControl.hasError('required') && this.categoryControl.touched;
    // }
    // //subCategory
    // get subCategoryControl() {
    //     return this.form.get('subCategory') as FormControl;
    // }
    // get subCategoryControlInvalid() {
    //     return this.subCategoryControl.hasError('required') && this.subCategoryControl.touched;
    // }

    // constructor(private fb: FormBuilder) {
    // }

    // ngOnInit() { }

    // ngOnChanges(changes: SimpleChanges) {
    //     if (this.todo && this.todo.id) {
    //       this.exists = true;
    //       this.form.patchValue(this.todo);
    //     }
    //     // this.form
    //     //   .get('toppings')
    //     //   .valueChanges.pipe(
    //     //     map(toppings => toppings.map((topping: Topping) => topping.id))
    //     //   )
    //     //   .subscribe(value => this.selected.emit(value));
    //   }


    // createTodo(form: FormGroup) {
    //     const { value, valid } = form;
    //     console.log("form:", form);
    //     if (valid) {
    //         this.create.emit(value);
    //     }
    // }

    // updateTodo(form: FormGroup) {
    //     const { value, valid, touched } = form;
    //     if (touched && valid) {
    //       this.update.emit({ ...this.todo, ...value });
    //     }
    //   }


}

