import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input',
  template:
  `
  <mat-form-field class="example-full-width" [formGroup] = "group">
  <input matInput placeholder="{{ config.label }}" value ="" [formControlName] ="config.name">
</mat-form-field>
  `
  //styleUrls: ['form-input.component.scss'],
  // template: 
  //   <div 
  //     class="dynamic-field form-input" 
  //     [formGroup]="group">
  //     <label>{{ config.label }}</label>
  //     <input
  //       type="text"
  //       [attr.placeholder]="config.placeholder"
  //       [formControlName]="config.name">
  //   </div>
  // 
})
export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
