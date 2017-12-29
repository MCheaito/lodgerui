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

@Component({
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
})


export class TodoFormComponent implements OnInit {

    form = this.fb.group({
//        description: ['', [Validators.required, Validators.minLength(2)]],
        description: ['', Validators.required ],
        category:['', Validators.required],
        subCategory:['', Validators.required]
        // assignedTo:['', Validators.required],
        // createdBy:['', Validators.required],
        // createdOn:['', Validators.required],
        // dueBy:['', Validators.required],
        // prior:['', Validators.required],
        // done:['', Validators.required],
        //remarks:['sss', Validators.nullValidator]   

    });

    //Description
     get descriptionControl() {
         return this.form.get('description') as FormControl;
     }
    get descriptionControlInvalid() {
        return this.descriptionControl.hasError('required') && this.descriptionControl.touched;
    }
    //Category
    get categoryControl() {
        return this.form.get('category') as FormControl;
    }
   get categoryControlInvalid() {
       return this.categoryControl.hasError('required') && this.categoryControl.touched;
   }
    //subCategory
    get subCategoryControl() {
        return this.form.get('subCategory') as FormControl;
    }
   get subCategoryControlInvalid() {
       return this.subCategoryControl.hasError('required') && this.subCategoryControl.touched;
   }



    constructor(private fb: FormBuilder) {
    }
    ngOnInit() { }


}

