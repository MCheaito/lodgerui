import { Action } from '@ngrx/store';

import { KeyValue } from '../../../app/dynamic-form/models/key-value.model';

// load Enum
export const LOAD_ENUM = '[enum] Load enum List';
export const LOAD_ENUM_FAIL = '[enum] Load enum List Fail';
export const LOAD_ENUM_SUCCESS = '[enum] Load enum List Success';

//
export class LoadEnums implements Action {
    readonly type = LOAD_ENUM;
    constructor(public payload:string ){}
}
export class LoadEnumsSuccess implements Action {
    readonly type = LOAD_ENUM_SUCCESS;
    constructor(public payload: KeyValue[]) {}
}
export class LoadEnumsFail implements Action {
    readonly type = LOAD_ENUM_FAIL;
    constructor(public payload: any) {}
}

// action types
export type EnumsAction =
| LoadEnums
| LoadEnumsFail
| LoadEnumsSuccess;
