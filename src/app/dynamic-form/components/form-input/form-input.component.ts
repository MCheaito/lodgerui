import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input',
  styleUrls: ['form-input.component.scss'],
  // template:
  //   `
  // <mat-form-field  [formGroup] = 'group' >
  //   <input matInput placeholder="{{ config.label }}" value ="" [formControlName] ="config.name"  >
  // </mat-form-field>
  // `
  template:
  `
    <div
      class="dynamic-field form-input"
      [formGroup]="group">
      <label class="form-control-placeholder" for="config.name">{{ config.label }}</label>
      <input
        type="text"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name">
    </div>
  `
})
export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
