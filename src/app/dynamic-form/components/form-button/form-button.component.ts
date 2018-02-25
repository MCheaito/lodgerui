import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
// <div>
// <button mat-raised-button color="primary" [disabled]="config.disabled"  >{{ config.label }}</button>
// </div>
@Component({
  selector: 'form-button',
  styleUrls: ['form-button.component.scss'],
  template: `
  <div
    [formGroup]="group">
    <button
    class="btn btn-primary"
      [disabled]="config.disabled"
      type="submit">
      {{ config.label }}
    </button>
  </div>
  `
})
export class FormButtonComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
