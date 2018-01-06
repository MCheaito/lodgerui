import * as fromEnum from "../actions/enum.actions";
import { KeyValue } from '../../../app/dynamic-form/models/key-value.model';

//State
export interface EnumState {
  entities: { [id: number]: KeyValue };
  loaded: boolean;
  loading: boolean;
}

export const initialState: EnumState = {
  entities: {},
  loaded: false,
  loading: false
};

//Reducers function
export function reducer(
  state = initialState,
  action: fromEnum.EnumsAction
): EnumState {
  switch (action.type) {
    case fromEnum.LOAD_ENUM: {
      return {
        ...state,
        loading: true
      };
    }

    case fromEnum.LOAD_ENUM_SUCCESS: {
      const enums = action.payload;
      const entities = enums.reduce(
        (entities: { [id: number]: KeyValue }, enums: KeyValue) => {
          return {
            ...entities,
            [enums.key]: enums
          };
        },
        {
          ...state.entities
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
  }
  return state;
}

export const getEnumsEntities = (state: EnumState) => state.entities;
export const getEnumsLoading = (state: EnumState) => state.loading;
export const getEnumsLoaded = (state: EnumState) => state.loaded;
