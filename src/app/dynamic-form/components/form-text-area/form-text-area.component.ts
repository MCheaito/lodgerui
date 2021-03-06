import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input',
  styleUrls: ['form-text-area.component.scss'],
//   <mat-form-field  [formGroup] = "group">
//   <textarea matInput placeholder="{{ config.label }}"  [formControlName] = "config.name"></textarea>
// </mat-form-field>
  template: `
  <div class="dynamic-field form-input" [formGroup]="group">
  <label>{{ config.label }}</label>
  <textarea rows="4" cols="50"
    [attr.placeholder]="config.placeholder"
    [formControlName]="config.name"
    >
    </textarea>
</div>
  `
})
export class FormTextAreaComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
