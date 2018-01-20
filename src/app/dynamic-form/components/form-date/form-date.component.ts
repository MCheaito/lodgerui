import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-date',
  styleUrls: ['form-date.component.scss'],
  template: `
    <mat-form-field  [formGroup]="group">
    <input matInput [matDatepicker] = "picker" placeholder = "{{ config.label }}"  [formControlName] = "config.name" />
    <mat-datepicker-toggle matSuffix [for] = "picker" ></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
  </mat-form-field>
   `
})
export class FormDateComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
