import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store'; // store de l'application
import * as fromFeature from '../reducers';
import * as fromEnums from '../reducers/enum.reducer';
import { KeyValue,Enums } from '../../../app/dynamic-form/models';


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
  
  
  export const getCategoriesEnums  = createSelector( getEnumsState,fromEnums.getEnumslistOfCategories);
  export const getClientTypesEnums  = createSelector( getEnumsState,fromEnums.getEnumslistOfClientTypes);
  export const getPriorityEnums  = createSelector( getEnumsState,fromEnums.getEnumslistOfPriority);
  export const getSeverityEnums  = createSelector( getEnumsState,fromEnums.getEnumslistOfSeverity);
  
  export const getEnumsLoaded = createSelector(
    getEnumsState,
    fromEnums.getEnumsLoaded
  );
  export const getEnumsLoading = createSelector(
    getEnumsState,
    fromEnums.getEnumsLoading
  );