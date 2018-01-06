import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-date',
  styleUrls: ['form-date.component.scss'],
  template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <div class="input-group date" data-provide="datepicker">
        <input type="date" class="form-control" 
        [formControlName]="config.name"   >
      </div>    
    </div>
  `
})
export class FormDateComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
