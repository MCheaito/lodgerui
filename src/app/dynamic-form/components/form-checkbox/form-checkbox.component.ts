import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Field } from "../../models/field.interface";
import { FieldConfig } from "../../models/field-config.interface";

@Component({
  selector: "form-checkbox",
  template: `
  <div [formGroup] = "group">
    <mat-checkbox [formControlName] ="config.name">
      {{ config.label }}
    </mat-checkbox>
  </div>
  `

})
export class FormCheckBoxComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
