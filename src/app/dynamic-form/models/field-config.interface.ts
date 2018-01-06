import { ValidatorFn } from "@angular/forms";
import { KeyValue } from "./key-value.model";

export interface FieldConfig {
  disabled?: boolean;
  label?: string;
  name: string;
  options?: KeyValue[];
  placeholder?: string;
  type: string;
  validation?: ValidatorFn[];
  value?: any;
  format?: string;
}
