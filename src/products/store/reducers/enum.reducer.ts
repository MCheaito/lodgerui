import * as fromEnum from "../actions/enum.actions";
import { Enums, KeyValue } from '../../../app/dynamic-form/models';

//State
export interface EnumState {
  listOfCategories: KeyValue[];
  listOfClientTypes: KeyValue[];
  listOfSeverity: KeyValue[];
  listOfPriority: KeyValue[];
  entities: { [id: number]: Enums };
  loaded: boolean;
  loading: boolean;
}

export const initialState: EnumState = {
  listOfCategories: [],
  listOfClientTypes: [],
  listOfSeverity: [],
  listOfPriority: [],
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
      const enums = action.payload as Enums[];
      const listOfCategories = enums.find( elem => elem.name === "categories").list; 
      const listOfClientTypes = enums.find( elem => elem.name === "clientTypes").list; 
      const listOfSeverity = enums.find( elem => elem.name === "severity").list; 
      const listOfPriority= enums.find( elem => elem.name === "priority").list; 

      const entities = enums.reduce(
        (entities: { [id: number]: Enums }, enums: Enums) => {
          return {
            ...entities,
            [enums.name]: enums
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
        entities, 
        listOfCategories, 
        listOfClientTypes, 
        listOfSeverity,
        listOfPriority
      };
    }
  }
  return state;
}

export const getEnumslistOfCategories = (state: EnumState) => state.listOfCategories;
export const getEnumslistOfClientTypes = (state: EnumState) => state.listOfClientTypes;
export const getEnumslistOfSeverity = (state: EnumState) => state.listOfSeverity;
export const getEnumslistOfPriority = (state: EnumState) => state.listOfPriority;

export const getEnumsEntities = (state: EnumState) => state.entities;
export const getEnumsLoading = (state: EnumState) => state.loading;
export const getEnumsLoaded = (state: EnumState) => state.loaded;
