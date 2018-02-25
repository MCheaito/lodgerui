import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

// <div [formGroup] = "group" >
// <mat-checkbox [formControlName] ="config.name">
//   {{ config.label }}
// </mat-checkbox>
// </div>
@Component({
  selector: 'form-checkbox',
  template: `
  <div class="form-check" [formGroup] = "group">
      <label for="config.name" class="form-check-label">{{ config.label }}</label>
  <input type="checkbox" class="form-check-input" [formControlName] ="config.name">
</div>
  `

})
export class FormCheckBoxComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
