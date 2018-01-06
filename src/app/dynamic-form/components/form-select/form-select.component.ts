import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'form-select',
  styleUrls: ['form-select.component.scss'],
  template: `
    <div 
      class="dynamic-field form-select"
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <select [formControlName]="config.name"   (change)="onChange($event)">
        <option value="">{{ config.placeholder }}</option>
        <option *ngFor="let option of (config.options | async)  " [ngValue]="option.key">{{option.value}}</option>        
      </select>
    </div>
  `
})



export class FormSelectComponent implements Field {
  config: FieldConfig;
  group: FormGroup;


onChange(event:any)
 {
   console.log("select ... config ... ", this.config);
 }

}
