import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormDateComponent } from './components/form-date/form-date.component';
import { FormCheckBoxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormTextAreaComponent } from './components/form-text-area/form-text-area.component';

@NgModule({
  exports: [
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormDateComponent,
    FormTextAreaComponent,
    FormCheckBoxComponent
  ],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormDateComponent,
    FormTextAreaComponent,
    FormCheckBoxComponent

  ]
})
export class DynamicFormModule {}
