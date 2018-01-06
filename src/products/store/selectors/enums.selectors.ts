import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store'; // store de l'application
import * as fromFeature from '../reducers';
import * as fromEnums from '../reducers/enum.reducer';
import { KeyValue } from '../../../app/dynamic-form/models/key-value.model';


export const getEnumsState = createSelector(
    fromFeature.getProductsState,
    (state: fromFeature.ProductsState) => state.enums
  );
  

export const getEnumsEntities = createSelector(
    getEnumsState, 
    fromEnums.getEnumsEntities
)

//Parmis toutes les entities retourn l'entité (todo) ayant le Id qu on a dans RouterState
  export const getAllEnums = createSelector(getEnumsEntities, entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  });
  
  export const getEnumsLoaded = createSelector(
    getEnumsState,
    fromEnums.getEnumsLoaded
  );
  export const getEnumsLoading = createSelector(
    getEnumsState,
    fromEnums.getEnumsLoading
  );