import { ValidatorFn } from '@angular/forms';
import { KeyValue } from './key-value.model';
import { Observable } from 'rxjs/Observable';

export interface FieldConfig {
  disabled?: boolean;
  label?: string;
  name: string;
  options$?: Observable<any>;
  placeholder?: string;
  type: string;
  validation?: ValidatorFn[];
  value?: any;
  cols?: number;
}
